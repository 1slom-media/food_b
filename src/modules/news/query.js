const GETNEWS = `
    select
        n.*
    from news as n
    where n.status = 'active' and case when $1 > 0 then n.news_id = $1 else true end
`;

const POSTNEWS =`
insert into news (title, description, news_image)
values ($1, $2, $3) returning *
`;

const PUTNEWS = `
    with old_news as (
        select
            news_id,
            title,
            description
        from news
        where news_id = $1    
    ) update news as n 
        set
          title = 
                case 
                    when length($2) > 1 then $2
                    else o.title
                end,
          description = 
                case 
                when length($3) > 1 then $3
                else o.description
            end
    from old_news as o   
    where n.news_id = $1 and n.status = 'active'
    returning n.*                 
`;

const DELETENEWS = `
    update news
    set status = 'deleted'
    where news_id = $1 and status = 'active'
    returning *  
`;

export{
    GETNEWS,
    POSTNEWS,
    PUTNEWS,
    DELETENEWS
}