const db = require("../config/connect_mysql");
const query = db.promise();

const category = {
  async getCate() {
    try {
      const data = await query.query(`select * from category`);
      return data[0];
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  async getPackByCate(id) {
    try {
      const data = await query.query(
        `select pack._IDPACK,pack.NAMEPACK,pack.TOTALPRICE,cate.NAMECATEGORY from (vaccine_pack as pack join category_pack as pcate on pack._IDPACK=pcate._IDPACK) join category as cate on pcate._IDCATEGORY = cate._IDCATEGORY where cate._IDCATEGORY =?`,
        [id],
      );
      return data[0];
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  async getVaccineCate(id) {
    try {
      const data = await query.query(
        `select vc._IDVACCINE,vc.NAMEVACCINE,vc.PREVENTION,vc.PRICE,vc.QUANTITY,vc.SOURCE,cate._IDCATEGORY,cate.NAMECATEGORY from (vaccine as vc join vaccine_category as vcate on vc._IDVACCINE=vcate._IDVACCINE) join category as cate on cate._IDCATEGORY = vcate._IDCATEGORY where cate._IDCATEGORY =?`,
        [id],
      );
      console.log(data);
      return data[0];
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
module.exports = category;
