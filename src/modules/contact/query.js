

const GETCONTACT = `
    select
        *
    from contact as c
    where c.status = 'active' and case
                                    when $1 > 0 then c.user_id = $1
                                    else true
                                    end 
`;

const GETCONTACTA = `
    select
        *
    from contact as c
    where c.status = 'new' or c.status='active' and case
                                    when $1 > 0 then c.user_id = $1
                                    else true
                                    end 
`;

const POSTCONTACT = `
    insert into contact(username,phone,email,message,subject) values ($1,$2,$3,$4,$5) returning *
`

const PUTCONTACT=`
update contact
set status ='active'
where user_id = $1 and status = 'new'
returning * 
`

const DELETECONTACT=`
update contact
set status ='deleted'
where user_id = $1 and status = 'new' or status='active'
returning * 
`



export { GETCONTACT, POSTCONTACT,GETCONTACTA,PUTCONTACT,DELETECONTACT };