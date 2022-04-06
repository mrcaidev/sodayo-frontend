CREATE TABLE orders (
  id UUID,
  type_id NUMBER,
  status_id NUMBER,
  placed_time TIMESTAMPTZ,
  taken_time TIMESTAMPTZ,
  finished_time TIMESTAMPTZ,
  placed_user_id UUID,
  taken_user_id UUID,
  description VARCHAR2(200),
  cost NUMERIC(4, 2)
);