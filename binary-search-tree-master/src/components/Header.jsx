import React from 'react';
import ExibeOrdem from './ExibeOrdem/index';
const Sidebar = ({ verify,text,array,searchNumber,pre_ordem,em_ordem,pos_ordem,current, setCurrent, insert, data }) => {
  return (

    <div className="sidebar-wrapper">
      <div>
        <input
          className="next-node-input fullwidth"
          type="number"
          name="current"
          value={current}
          onChange={e => setCurrent(e.target.value)}
          placeholder="Insira o valor"
        />
        <button
          className="next-node-button fullwidth"
          disabled={!current || isNaN(current)}
          onClick={() => {
            insert(parseInt(current, 10));
            setCurrent('');
          }}
        >
          Adicionar
        </button>
        <div style = {{paddingTop:2}}>
          <button
            className="next-node-button fullwidth"
            disabled={!current || isNaN(current)}
            onClick={() => searchNumber(parseInt(current,10))}
          > 
          Buscar
          </button>
        </div>
        <div style = {{paddingTop:2}}>
          <button
            className="next-node-button fullwidth"
            disabled={false}
            onClick={() => em_ordem(data.root)}
          > 
          Em ordem
          </button>
        </div>
        <div style = {{paddingTop:2}}>
          <button
            className="next-node-button fullwidth"
            disabled={false}
            onClick={() => pre_ordem(data.root)}
          > 
          Pre ordem
          </button>
        </div>
        <div style = {{paddingTop:2}}>
          <button
                className="next-node-button fullwidth"
                disabled={false}
                onClick={() => pos_ordem(data.root)}
              > 
              Pos ordem
          </button>
        </div>
      </div>
    <div className= "container-div"> 
      {verify && <text style = {{fontSize:15,color:"red",fontWeight:"bold"}}>{text}</text>}
      {array.length > 0 && <ExibeOrdem array = {array}/>}
    </div>
    </div>
    
  );
};

export default Sidebar;
