import React from "react";
import { VscSearch, VscChromeClose } from "react-icons/vsc";

interface SearchBarProps {
  inputId: string;
  placeholder: string;
  datalistId: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput: (e: React.FormEvent<HTMLInputElement>) => void;
  list: string[];
  datalist: string[];
  check: number;
  setCheck: (val: number) => void;
  setList: (val: string[]) => void;
  selectorList: string[]; // ex: ['#Cap', '#Cypher', '#SteamCloud']
}

export const SearchBar: React.FC<SearchBarProps> = ({
  inputId,
  placeholder,
  datalistId,
  onChange,
  onInput,
  list,
  datalist,
  check,
  setCheck,
  setList,
  selectorList
}) => {
  return (
    <div
      className="flex justify-center items-center m-auto hover:brightness-200 
        n0:w-[35rem] n0:h-10
        n1:w-[33rem] n1:h-10
        n2:w-[33rem] n2:h-10 
        n3:w-[33rem] n3:h-10 
        n4:w-[26rem] n4:h-10
        n5:w-[25rem] n5:h-10"
    >
      <label
        aria-label="Search by skill, OS, Active or Retired, etc."
        htmlFor={inputId}
      ></label>

      <input
        id={inputId}
        onChange={onChange}
        onInput={onInput}
        autoComplete="on"
        type="search"
        placeholder={placeholder}
        list={datalistId}
        className="input px-5 bg-BG text-T1 text-sm placeholder:text-T1  border-[1.5px] border-[#16161656] rounded-3xl ml-8 hover:brightness-50
          n0:w-[35rem] n0:h-10
          n1:w-[33rem] n1:h-10
          n2:w-[33rem] n2:h-10 
          n3:w-[32rem] n3:h-10 
          n4:w-[26rem] n4:h-10
          n5:w-[25rem] n5:h-10 n5:text-sm
          n6:w-64 n6:h-8 n6:text-xs 
          n7:w-52 n7:h-8 n7:text-xs"
      />

      {check === 1 ? (
        <VscChromeClose
          color="#375949"
          className="pr-2 relative right-10 
            n0:w-10 n0:h-10
            n1:w-10 n1:h-10
            n2:w-10 n2:h-10
            n3:w-10 n3:h-10
            n4:w-10 n4:h-10
            n5:w-10 n5:h-10 
            n6:w-8 n6:h-8
            n7:w-7 n7:h-7"
          style={{ cursor: "pointer" }}
          onClick={() => {
            const inputEl = document.querySelector(`#${inputId}`) as HTMLInputElement;
            if (inputEl) inputEl.value = "";
            setCheck(0);
            setList([]);
            const query = selectorList.join(",");
            document.querySelectorAll(query).forEach((el: any) => {
              el.style.display = "flex";
            });
          }}
        />
      ) : (
        <VscSearch
          color="#375949"
          className="pr-2 relative right-10 
            n0:w-10 n0:h-10
            n1:w-10 n1:h-10
            n2:w-10 n2:h-10
            n3:w-10 n3:h-10
            n4:w-10 n4:h-10
            n5:w-10 n5:h-10 
            n6:w-8 n6:h-8
            n7:w-7 n7:h-7"
        />
      )}

      <datalist id={datalistId}>
        {list.map((item, index) => (
          <option key={index} value={item} />
        ))}
        {datalist.map((item, index) => (
          <option key={index} value={item} />
        ))}
      </datalist>
    </div>
  );
};
