class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const objReq = { ...this.queryString };

    // 1) Simple Filtering
    const excludedFileds = ["page", "sort", "limit", "fields"];
    excludedFileds.forEach((el) => delete objReq[el]);

    // 2) Advanced Filtering
    let queryStr = JSON.stringify(objReq);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    // console.log(JSON.parse(queryStr));

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const reqFields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(reqFields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);
    // if (this.queryString.page) {
    //   const numTours = await Tour.countDocuments();
    //   if (skip >= numTours) throw new Error("This Page Does Not Exist");
    // }

    return this;
  }
}

module.exports = APIFeatures;

// OLLD CODE BRFORE THE CLASS
// // Building The Query
// const objReq = { ...req.query };

// // 1) Simple Filtering
// const excludedFileds = ["page", "sort", "limit", "fields"];
// excludedFileds.forEach((el) => delete objReq[el]);

// // 2) Advanced Filtering
// let queryStr = JSON.stringify(objReq);
// queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
// // console.log(JSON.parse(queryStr));

// let query = Tour.find(JSON.parse(queryStr));
// console.log(query);
// // Add Sorting to the query

// if (req.query.sort) {
//   const sortBy = req.query.sort.split(",").join(" ");
//   query = query.sort(sortBy);
// } else {
//   query = query.sort("-createdAt");
// }

// // 3) Add Only Fields this thing called Projecting in worldWide programming network
// if (req.query.fields) {
//   const reqFields = req.query.fields.split(",").join(" ");
//   query = query.select(reqFields);
// } else {
//   query = query.select("-__v");
// }

// // 4) Adding Pagination Feature
// const page = req.query.page * 1 || 1;
// const limit = req.query.limit * 1 || 100;
// const skip = (page - 1) * limit;
// console.log(skip);

// query = query.skip(skip).limit(limit);
// if (req.query.page) {
//   const numTours = await Tour.countDocuments();
//   if (skip >= numTours) throw new Error("This Page Does Not Exist");
// }

// console.log(tours);

// Another way to filtering
// Tour.find(objReq)
// .where("duration")
// .equals(5)
// .where("difficulty")
// .equals("easy")

// Excute the query
