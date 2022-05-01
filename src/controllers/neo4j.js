const neo4j = require("neo4j-driver");
const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "180300"),
);
const session = driver.session({ database: "" });
class Neo4jController {
  async getInjected_with(req, res) {
    try {
      const result = await session.run(
        "MATCH(a:patient)-[:injected_with]->(n:vaccine) where a.ms=$ms return a.tenkh,n.tenph",
        { ms: req.id },
      );
      console.log(result);
      await session.close();
      await driver.close();
    } catch (err) {
      await session.close();
      await driver.close();
      console.log(err);
      return res.json(err);
    }
  }
}

module.exports = new Neo4jController();
