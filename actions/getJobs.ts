import axios from 'axios';

export async function getJobs(category: string = '', search: string = '', page: number = 1) {
  try {
    let url = `https://remotive.com/api/remote-jobs?limit=24&page=${page}`;
    if (search) {
      url += `&search=${encodeURIComponent(search)}`;
    } else if (category) {
      url += `&category=${encodeURIComponent(category)}`;
    }
    const res = await axios.get(url);
    return res;
  } catch (error: any) {
    if (error.response) {
      const { status, data } = error.response;
      if (status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      }
      console.log('API Error:', data);
    } else {
      console.log('Error Message:', error.message);
    }
    throw new Error('Failed to fetch job data');
  }
}
