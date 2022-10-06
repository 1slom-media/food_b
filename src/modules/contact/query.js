

const GETCONTACT = `
    select
        *
    from contact as c
    where c.status = 'active' and case
                                    when $1 > 0 then c.user_id = $1
                                    else true
                                    end 
`;

const POSTCONTACT = `
    insert into contact(username,phone,email,message,subject) values ($1,$2,$3,$4,$5) returning *
`



export { GETCONTACT, POSTCONTACT };