const BookRouter = require("../routes/BookRouter");
const CategoryRouter = require("../routes/CategoryRouter");
const UserRouter = require("../routes/UserRouter");
const CouponRouter = require("../routes/CouponRouter");
const StaticialRouter = require("../routes/StaticialsRouter");
const OrderRouter = require("../routes/OrderRouter")
const routerConfig = (app) => {
  app.use("/book", BookRouter);
  app.use("/category", CategoryRouter);
  app.use("/coupon", CouponRouter);
  app.use("/user", UserRouter);
  app.use("/staticial",StaticialRouter);
  app.use("/order",OrderRouter)
};
module.exports = routerConfig;
