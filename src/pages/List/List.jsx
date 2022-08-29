import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import "./list.css";

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  
  return (
    <div>
      <Navbar/>
      <Header type="list" />  
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {openDate &&
                (<DateRange onChange={(item) => setDate([item.selection])}
                minDate={new Date()} ranges={date} />)}
              
            </div>
            <div className="lsOption">
            <div className="listItem">
              <label>Options</label>
              <div className="listOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="listOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="listOptionItem">
                <span className="lsOptionText">
                  Adult
                </span>
                <input type="number" min={1}  className="lsOptionInput" placeholder={options.adult} />
              </div>
              <div className="listOptionItem">
                <span className="lsOptionText">
                  Children
                </span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
              </div>
              <div className="listOptionItem">
                <span className="lsOptionText">
                  Room
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
              </div>
              </div>
            </div>
             <button>Search</button>
          </div>
          <div className="listResult">
           <SearchItem/>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default List