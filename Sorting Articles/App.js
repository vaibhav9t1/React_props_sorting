import React, { useCallback, useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

  const [status, Changestatus] = useState('VOTE');

  const VoteHandler=()=>{
     Changestatus("VOTE");
  }
  const DateHandler=()=>{
    Changestatus("DATE");
  }

  const sorting = ()=>{
    let data = articles;

    if(status == "VOTE"){
       data.sort((a, b) => (a.upvotes < b.upvotes ? 1 : -1))
    }
    else{
       data.sort((a, b) => (a.date < b.date ? 1 : -1))
    }

    return <Articles articles={data}/>
  }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={VoteHandler} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={DateHandler} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            {sorting()}
            {/* <Articles articles={articles}/> */}
        </div>
    );

}

export default App;
