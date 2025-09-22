export function getauth() {
    let query = 'select * from auth where mobile_no = $1'
    return query
}

export function createauth() {
    // let query = 'INSERT INTO public.auth ("token", mobile_no, user_id, created_at, created_by, updated_at, updated_by, status) VALUES (?,?,?,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,TRUE)'
    let query = 'INSERT INTO auth ("token",mobile_no,user_type,created_at, created_by, updated_at, updated_by, status) VALUES ($1,$2,$3,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,TRUE)'
    return query
}

export function updateauth(){
    let query = 'UPDATE auth SET token = $1, updated_at = CURRENT_TIMESTAMP, updated_by= CURRENT_TIMESTAMP WHERE mobile_no = $2'
    return query
}