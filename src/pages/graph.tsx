import { useContext, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { DataContext } from '../contexts/DataContext';
import Navbar from '../components/Navbar';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Box = styled.div`
  max-width: 1000px;
`;

export default function graph() {
  const { getCategories, filteredPokemons } = useContext(DataContext);
  const categories = getCategories();
  const uniqueCategories = [...new Set(categories || [])];
  const dados: Number[] = [];

  const result = filteredPokemons.reduce(function (r, a) {
    a.types.map(item => {
      r[item.type.name] = r[item.type.name] || [];
      r[item.type.name].push(a);
    })
    return r;
  }, []);

  if (uniqueCategories.length > 0) {
    uniqueCategories.map(category => {
      if (result[category]) {
        dados.push(result[category].length)
      }
      return true;
    })
  }

  const data = {
    labels: uniqueCategories,
    datasets: [{
      label: 'Quantidade de pokémons',
      data: dados,
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        '#a3ff6677'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        '#a3ff66FF'
      ],
      borderWidth: 1
    }]
  }

  return (
    <>
      <Navbar />
      <Container>
        <Box>
          <Bar
            type="bar"
            data={data}
            width={800}
            height={400}
          />
        </Box>
      </Container>
    </>
  )
}
