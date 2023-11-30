import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Auth } from 'aws-amplify';
import Loader from './Loader';
import FileIcon from '../assets/file-icon.png';
import ImageIcon from '../assets/image-icon.png';
import DownloadIcon from '../assets/download-icon.png';
import DeleteIcon from '../assets/delete-icon.png';
import ShareIcon from '../assets/share-icon.png';

const FileList = () => {
  const [data, setData] = useState([]);
  const [id, setID] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copyText, setCopyText] = useState('');

  const getFiles = async () => {
    setLoading(true);
    const authUser = await Auth.currentAuthenticatedUser();
    setID(authUser.username);
    const ID = authUser.username;
    try {
      const response = await axios.get(`https://rjbw9ux3u9.execute-api.us-west-2.amazonaws.com/prod1/file-list?userId=${ID}`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const fileDownload = async (fileName) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://rjbw9ux3u9.execute-api.us-west-2.amazonaws.com/prod1/file-download?userId=${id}&fileName=${fileName}`);
      console.log(response, 'response');
      window.open(response.data.url);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const fileDelete = async (fileName) => {
    setLoading(true);
    try {
      await axios.delete(`https://rjbw9ux3u9.execute-api.us-west-2.amazonaws.com/prod1/file-delete?userId=${id}&fileName=${fileName}`);
      getFiles();
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const copyLink = async (fileName) => {
    const link = `https://rjbw9ux3u9.execute-api.us-west-2.amazonaws.com/prod1/file-download?userId=${id}&fileName=${fileName}`;
    navigator.clipboard.writeText(link);
    setCopyText('Link copied!');
  }

  // const filePreview = async (fileName) => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(`https://rjbw9ux3u9.execute-api.us-west-2.amazonaws.com/prod1/file-download?userId=${id}&fileName=${fileName}`);
  //     window.open(response.data.url, '_blank');
  //     setLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <br />
      <div>
        <div className="relative w-5/6 overflow-x-auto shadow-md sm:rounded-lg">
          <p className='text-success py-3' style={{fontSize: '12px'}}>{copyText}</p>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Folder
                </th>
                <th scope="col" className="px-6 py-3">
                  File Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Preview
                </th>
                <th scope="col" className="px-6 py-3">
                  Version
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  File Type
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-3 py-4 text-center">/</td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.name}
                    </th>
                    {/* <td className="px-3 py-4">{(item.size / 1024).toFixed(2) + 'KB'}</td> */}
                    <td className="px-3 py-4">{item.type.includes('application') ? <img src={FileIcon} alt='' style={{width: '32px'}} /> : <img src={ImageIcon} alt='' style={{width: '32px'}} />}</td>
                    <td className="px-3 py-4">{item.lastModified}</td>
                    <td className="px-3 py-4">
                      {/* <button
                        onClick={() => filePreview(item.name)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold mx-2 py-2 px-4 rounded">
                        Preview
                      </button> */}
                      <div style={{display: 'flex', flexDirection: 'row'}}>
                        <img src={DownloadIcon} alt='' style={{width: '24px', margin: '5px'}}  onClick={() => fileDownload(item.name)} />
                        <img src={DeleteIcon} alt='' style={{width: '24px', margin: '5px'}} onClick={() => fileDelete(item.name)} />
                        <img src={ShareIcon} alt='' style={{width: '24px', margin: '5px'}} onClick={() => copyLink(item.name)} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FileList;
