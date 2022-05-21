
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { FIND_QUERY } from "../../queries/Users/userQueries"
import ContentContainer from "./ContentContainer"
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import 'jest-styled-components'
const mocks = [
  {
    request: {
      query: FIND_QUERY,

    },
    result: {
      data: {
        list: [{ 
          name: "Cecilia Phillips",
          age: "30",
          email: "ceciliaphillips@daido.com",
          id: "123",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [],
          greeting: "testStr",
        },{ 
          name: "CeasdPhillips",
          age: "30",
          email: "ceciliaphillips@daido.com",
          id: "123sdgsd",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [],
          greeting: "testStr",
        },{ 
          name: "Cec ps",
          age: "30",
          email: "ceciliaphillips@daido.com",
          id: "124123",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [],
          greeting: "testStr",
        }],
      },
    },
  },
  {
    request: {
      query: FIND_QUERY,
      variables: {
        name: "Cecilia Phillips"
      }
    },
    result: () => { 
    console.log("exec0")
    return ({
      data: {
        list: [{ 
          id: "123",
          name: "Cecilia Phillips",
          age: "30",
          email: "ceciliaphillips@daido.com",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [
            { 
              name: "CeasdPhillips",
              age: "30",
              email: "ceciliaphillips@daido.com",
              id: "123sdgsd",
              index: "0",
              picture: "testStr",
              eyeColor: "testStr",
              company: "testStr",
              phone: "testStr",
              friends: [],
              greeting: "testStr",
            },{ 
              name: "Cec ps",
              age: "30",
              email: "ceciliaphillips@daido.com",
              id: "124123",
              index: "0",
              picture: "testStr",
              eyeColor: "testStr",
              company: "testStr",
              phone: "testStr",
              friends: [],
              greeting: "testStr",
            }
          ],
          greeting: "testStr",
        }],
      },
    })}
  },
]; 
 

it('Tests rendering with initial data and search query', async () => {
  await act(async ()=>{
    render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ContentContainer/>
    </MockedProvider>)}
  );


const snapshotMocks = [
  {
    request: {
      query: FIND_QUERY,

    },
    result: {
      data: {
        list: [{ 
          name: "Cecilia Phillips",
          age: "30",
          email: "ceciliaphillips@daido.com",
          id: "123",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [],
          greeting: "testStr",
        },{ 
          name: "CeasdPhillips",
          age: "30",
          email: "ceciliaphillips@daido.com",
          id: "123sdgsd",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [],
          greeting: "testStr",
        },{ 
          name: "Cec ps",
          age: "30",
          email: "ceciliaphillips@daido.com",
          id: "124123",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [],
          greeting: "testStr",
        }],
      },
    },
  },
  {
    request: {
      query: FIND_QUERY,
      variables: {
        name: "Cecilia Phillips"
      }
    },
    result: () => { 
    console.log("exec 1")
    return ({
      data: {
        list: [{ 
          id: "123",
          name: "Cecilia Phillips",
          age: "30",
          email: "ceciliaphillips@daido.com",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [
            { 
              name: "CeasdPhillips",
              age: "30",
              email: "ceciliaphillips@daido.com",
              id: "123sdgsd",
              index: "0",
              picture: "testStr",
              eyeColor: "testStr",
              company: "testStr",
              phone: "testStr",
              friends: [],
              greeting: "testStr",
            },{ 
              name: "Cec ps",
              age: "30",
              email: "ceciliaphillips@daido.com",
              id: "124123",
              index: "0",
              picture: "testStr",
              eyeColor: "testStr",
              company: "testStr",
              phone: "testStr",
              friends: [],
              greeting: "testStr",
            }
          ],
          greeting: "testStr",
        }],
      },
    })}
  },
]; 
 
it("Tests Snapshot", async () => {
  let _container: any;
  await act(async ()=> {
    const { container } = await render(
      <MockedProvider mocks={snapshotMocks} addTypename={false}>
        <ContentContainer/>
      </MockedProvider>)
    _container = container;
    }
  );})})