import axios from 'axios'

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    try {
        const {
            data: {data}, 
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, 
            {
                params: {
                    bl_latitude: bl_lat ? bl_lat : '41.31703848925413',
                    tr_latitude: tr_lat ? tr_lat : '41.4682974272428',
                    bl_longitude: bl_lng ? bl_lng : '2.052333262952554',
                    tr_longitude: tr_lng ? tr_lng : '2.22804492421789',
                    limit: '30',
                    currency: 'USD',
                    lunit: 'km',
                    lang: 'en_US'
                  },
                  headers: {
                    'X-RapidAPI-Key': 'YOUR_API_KEY',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            }
        )

        return data
    } catch (error) {
        return null
    }
}