
const POSTEMAIL = `
insert into followers(email) values ($1) returning *
`



export {POSTEMAIL};