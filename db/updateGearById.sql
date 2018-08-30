UPDATE gear
SET make = $1,
model = $2,
serial = $3,
condition = $4,
categorydisplay =$5,
category = $6,
category_id = $7,
categorySlug = $8,
description = $9
WHERE id = $10
RETURNING *;