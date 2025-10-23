export function getPropertyList(params) {
  let query = "select * from property_list";
  query += " where status = true ";
  if (params.id) {
    query += `and id=${params?.id}`;
  }
  if (params.detail_id) {
    query += `and detail_id=${params?.detail_id}`;
  }
  if (params.location) {
    query += `and location='${params?.location}'`;
  }
  if (params.price) {
    query += `and price='${params?.price}'`;
  }
  if (params.house_type) {
    query += `and house_type='${params?.house_type}'`;
  }
  console.log("query", query);
  return query;
}
