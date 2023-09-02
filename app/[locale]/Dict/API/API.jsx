
const fetchDictionaryList = async () => {
  const response = await fetch('https://bildilchin.az:8888/bildilchin/get/dictionaryList', { cache: 'force-cache' });
 
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return response.json();
};

export default fetchDictionaryList;

