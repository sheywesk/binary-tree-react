import React from 'react';
import Tree from 'react-d3-tree';

const Graph = ({ data }) => {
  return (
    <div id="treeWrapper" style={{ width: '100%', height: '100%' }}>
      <Tree
        styles={{
          nodes: {
            node: {
              circle: {
                fill: '#d16ba5',
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: '1.6rem'
                }
              }
            },
            leafNode: {
              circle: {
                fill: '#5ffbf1',
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: '1.6rem'
                }
              }
            }
          }
        }}
        collapsible={false}
        orientation="vertical"
        translate={{
          x: document.getElementById('treeWrapper')
            ? document.getElementById('treeWrapper').clientWidth / 2
            : window.innerWidth / 2,
          y: document.getElementById('treeWrapper')
            ? document.getElementById('treeWrapper').clientHeight / 2
            : window.innerHeight / 2
        }}
        data={data}
      />
    </div>
  );
};

export default Graph;
