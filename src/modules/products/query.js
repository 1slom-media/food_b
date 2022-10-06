
const GETPRODUCTS = `
    select
        p.*
    from products as p
    where p.status = 'active' and case when $1 > 0 then p.product_id = $1 else true end
`

const POSTPRODUCTS = `
    insert into products (product_name, description, price, category_id,product_img)
    values ($1, $2, $3, $4, $5) returning *
`

const PUTPRODUCTS = `
    with old_products as (
        select
            product_id,
            product_name,
            description,
            price,
            product_img
        from products
        where product_id = $1    
    ) update products as p 
        set
          product_name = 
                case 
                    when length($2) > 1 then $2
                    else o.product_name
                end,
          description = 
                case 
                    when length($3) > 1 then $3
                    else o.description
                end,
          price = 
                case 
                    when $4 > 0 then $4
                    else o.price
                end,
        product_img = 
            case 
                when length($5) > 0 then $5
                else o.product_img
                end          
      from old_products as o   
      where p.product_id = $1 and p.status = 'active'
      returning p.*                 
`;

const DELETEPRODUCTS = `
    update products
    set status = 'deleted'
    where product_id = $1 and status = 'active'
    returning *  
`

const POSTIMAGEQUERY = `
        insert into images (product_id, image) values ($1, $2) returning *
`



export {
  GETPRODUCTS,
  POSTPRODUCTS,
  PUTPRODUCTS,
  DELETEPRODUCTS,
  POSTIMAGEQUERY,
};