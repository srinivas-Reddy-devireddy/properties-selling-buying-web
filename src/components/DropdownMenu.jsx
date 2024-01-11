import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import './dropdown.css'
const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <div>
      <input placeholder="Search location..."/>
     <IoMdArrowDropdown size={25}/>
      </div>
      <div>
        <button> FOR SALE</button><button>FOR RENT</button><button>FOR BOOK</button>
      </div>
     
    </div>
  );
};

export default DropdownMenu;