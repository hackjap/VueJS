import axios from 'axios';

const config = {
	baseUrl: 'https://api.hnpwa.com/v0/',
};

async function fetchNewList() {
	return await axios.get(`${config.baseUrl}news/1.json`);
}

async function fetchAskList() {
	return await axios.get(`${config.baseUrl}ask/1.json`);
}

async function fetchJobsList() {
	return await axios.get(`${config.baseUrl}jobs/1.json`);
}

export { fetchNewList, fetchAskList, fetchJobsList };
