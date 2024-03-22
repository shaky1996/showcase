

export async function fetchCars() {
    const headers = {

        'X-RapidAPI-Key': 'c9cc6e7562msh41c9bae593c588ep183cf6jsn6e04fb87dd9f',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response  = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    })

    const result = await response.json()

    return result
}