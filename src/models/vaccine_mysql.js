const db = require("../config/connect_mysql");
const query = db.promise();

const vaccine = {
  async getVaccineCate() {
    try {
      const data = await query.query(
        `select vc._IDVACCINE,vc.NAMEVACCINE,vc.PREVENTION,vc.PRICE,vc.QUANTITY,vc.SOURCE,cate._IDCATEGORY,cate.NAMECATEGORY from (vaccine as vc join vaccine_category as vcate on vc._IDVACCINE=vcate._IDVACCINE) join category as cate on cate._IDCATEGORY = vcate._IDCATEGORY`,
      );
      console.log(data);
      return data[0];
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  async getPackById(id) {
    try {
      const data = await query.query(
        `select NAMEPACK from vaccine_pack where _IDPACK = ?`,
        [id],
      );
      return data[0];
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  async getById(id) {
    try {
      const data = await query.query(
        `select NAMEVACCINE,SOURCE,PRICE,PREVENTION from vaccine where _IDVACCINE = ?`,
        [id],
      );
      return data[0];
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  async getVaccineByPack(id) {
    try {
      const data = await query.query(
        `select vc.NAMEVACCINE,vc.PREVENTION,vc.PRICE,vc.SOURCE from (vaccine as vc join pack_detail as vpack on vc._IDVACCINE=vpack._IDVACCINE) join vaccine_pack as pack on pack._IDPACK = vpack._IDPACK where pack._IDPACK = ?`,
        [id],
      );
      return data[0];
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  async getPack() {
    try {
      const data = await query.query(
        `select pack._IDPACK,pack.NAMEPACK,pack.TOTALPRICE,cate.NAMECATEGORY from (vaccine_pack as pack join category_pack as pcate on pack._IDPACK=pcate._IDPACK) join category as cate on pcate._IDCATEGORY = cate._IDCATEGORY`,
      );
      return data[0];
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
module.exports = vaccine;
