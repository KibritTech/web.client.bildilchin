
const fetchDictionaryList = async () => {
  const response = await fetch('https://bildilchin.az:8888/bildilchin/get/dictionaryList');
 
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return response.json();
};

export default fetchDictionaryList;

