import axios from 'axios';

export async function getJobs() {
  try {
    const res = await axios.get("https://remotive.com/api/remote-jobs?limit=24");
    return res;  // Return the response when successful
  } catch (error: any) {
    if (error.response) {
      // If the error has a response, we can access the status and message
      const { status, data } = error.response;
      if (status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      }
      console.log('API Error:', data);  // Log the detailed error response
    } else {
      // If no response, log the error message
      console.log('Error Message:', error.message);
    }

    throw new Error('Failed to fetch job data');
  }
}
