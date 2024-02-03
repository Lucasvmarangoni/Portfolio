import axios from 'axios';
import React, { useState, useEffect } from 'react';

interface Commits {
    last: string
    length: number
}

export async function GetCommitsCount(repoName: string): Promise<string> {
    const url = `https://api.github.com/repos/Lucasvmarangoni/${repoName}/commits`;
    let response: any
    try {
        let commits: any[] = [];
        let page = 1;

        do {
            response = await axios.get(`${url}?page=${page}`, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                },
            });

            commits = commits.concat(response.data);
            page++;

        } while (response.headers.link && response.headers.link.includes('rel="next"'));

        const numCommits = commits.length;

        return String(numCommits)
    } catch (error: any) {
        console.error('Erro ao obter commits:', error.response ? error.response.status : error.message);
        return "Erro ao obter commits"
    }
}


interface YourComponentProps {
    repoName: string;
  }
  
  const Commits: React.FC<YourComponentProps> = ({ repoName }) => {
    const [commits, setCommits] = useState<string | null>(null);

    const formattedName = repoName.toLowerCase().replace(/\s+/g, '-');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GetCommitsCount(formattedName);
                setCommits(response);
            } catch (error) {
                console.error('Erro ao obter commits:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="P flex">

            {commits !== null ? (
                <>
                <img src={`https://img.shields.io/badge/${String(commits)} commits-black`} alt={``}></img>
                   

                </>
            ) : (
                'Carregando...'
            )}
        </div>
    );
};

export default Commits;


