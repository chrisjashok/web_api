export function getUserquery(params) {

    let query = 'SELECT * from users';
    query += ' WHERE status = true'
    if (params.id) {
        query += ` AND id = ${params.id}`
    }
    if (params.name) {
        query += ` AND name = '${params.name}'`
    }
    if (params.email) {
        query += ` AND email = '${params.email}'`
    }
    console.log('query',query)
    return query
}

export function insertUserquery() {
    let query = 'INSERT INTO users(name,mobile_no,email,preference,created_at,created_by,updated_at,updated_by,status) VALUES ($1,$2,$3,$4,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,TRUE)'
    return query
}

export function updateUserquery(params) {
    let query = 'UPDATE public.users SET'
    const updates = [];

    updates.push(` updated_at = CURRENT_TIMESTAMP, updated_by = CURRENT_TIMESTAMP`)
    if (params.name) {
        updates.push(`name='${params.name}'`)
    }
    if (params.mobile_no) {
        updates.push(`mobile_no='${params.mobile_no}'`)
    }
    if (params.email) {
        updates.push(`email='${params.email}'`)
    }
    if (params.preference) {
        updates.push(`preference='${params.preference}'`)
    }
    if (typeof params.status === 'boolean') {
        updates.push(`status=${params.status}`)
    }

    if (!params.id) {
        throw new Error("user id is missing");
    }

    query += updates.join(', ');
    query += ` WHERE id = ${params.id}`;

    return query;

}