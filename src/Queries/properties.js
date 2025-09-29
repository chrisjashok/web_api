export function getProperties(params) {
    let query = 'select * from properties'
    query += ' where status = true'
    if (params.id) {
        query += ` and id=${params.id}`
    }
    
    return query
}