import React, { useState } from 'react';
import './App.css';

import Graph from './components/Graph';
import Header from './components/Header';
import ExibeOrdem from './components/ExibeOrdem';

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function App() {
  const [current, setCurrent] = useState('');
  const [exibe,setExibe] = useState([]); 
  const [data, setData] = useState({ root: null });
  const [verify,setVerify] = useState(false)
  const [text,setText] = useState()
  const array = []
  //função para exibição na arvore
  function traverse(obj) {
    if (!obj) return null;

    if (obj.left) {
      traverse(obj.left);
    }

    if (obj.value) {
      let children = [];

      if (obj.left) {
        children = [...children, traverse(obj.left)];
      }

      if (obj.right) {
        children = [...children, traverse(obj.right)];
      }

      return {
        name: String(obj.value),
        children: children.length && [traverse(obj.left)].length ? children : []
      };
    }
    if (obj.right) {
      traverse(obj.right);
    }
  }
  const searchNumber = valor =>{
    var verify = search(valor)
    if(verify){
      setText("Encontrado")
    }else{
      setText("Não Encontrado")
    }
    setVerify(true)
  }

  //Busca um valor na arvore e
  //verifica se existe
  const search = valor => {
    var found = false 
    var noAtual = data.root

    while(!found && noAtual){
      if(valor < noAtual.value) {
        noAtual = noAtual.left
      }else if(valor > noAtual.value){
        noAtual = noAtual.right  
      }else{
        found = true
      }
    }
    return found
  }
  //funções de caminhamento
  const em_ordem= (obj) =>{
    if(obj == null){
      setExibe(array)
      return
    }
    em_ordem(obj.left)
    array.push(obj.value)
    em_ordem(obj.right)
    setVerify(false)
  }

  const pos_ordem = obj => { 
    if(obj == null){
      setExibe(array)
      return
    }
    pos_ordem(obj.left)
    pos_ordem(obj.right)
    array.push(obj.value)
    setVerify(false)
   
  }
  const pre_ordem = obj => { 
    if(obj == null){
      setExibe(array)
      return
    }
    array.push(obj.value)
    pre_ordem(obj.left)
    pre_ordem(obj.right)
    setVerify(false)
  }
 
  const formatData = data => {
    const res = Object.keys(data).map(key => {
      return {
        name: data[key] && data[key].value ? String(data[key].value) : key,
        children: traverse(data.root) ? [traverse(data.root)] : null
      };
    });

    if (res[0].children) {
      return res[0].children;
    }

    return res;
  };
  //função de inserção na arvore
  const insert = value => {
    let node = new Node(value);
    // Set this node to the root value
    if (!data.root) setData({ root: node });
    else {
      let current = data.root;
      while (!!current) {
        if (node.value < current.value) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else if (node.value > current.value) {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        } else {
          break;
        }
      }
    }
    setVerify(false)
    return data;
  };

  return (
    <main className="App">
      <Header
        current={current}
        setCurrent={setCurrent}
        insert={insert}
        data={data}
        em_ordem = {em_ordem}
        pos_ordem = {pos_ordem}
        pre_ordem = {pre_ordem}
        array = {exibe}
        searchNumber = {searchNumber}
        verify = {verify}
        text = {text}
      />
      <Graph data={formatData(data)} />
    </main>
  );
}

export default App;
