import React, { Component } from 'react';

  class UserData extends Component {
    // This is bad practice
    // Better to user SQL database and a cache
    constructor(props) {
      super(props);

      this.database = {
        defaultUser: [
          "dummy@email.com",
          "password",
          "puppies,love,family,rescue,marriage proposal"
        ]
      }
    };


    getUser(user, password) {
      if(user in this.database && this.database[user][1] == password){
        return this.database[user];
      }
    }

    getCategoryList(user, password) {
      if(user in this.database && this.database[user][1] == password){
        return this.database[user][2].split(",");
      }
    }

    addUser(user, acctEmail, password) {
      if (!(user in this.database)) {
        var dataToAdd = this.database[user] = [acctEmail,
        password,
        ""];

        this.setState({
          database: dataToAdd
        });
          // Yay! Added a user!
          return true;
        }

      // User not added
      return false;
    }

    addCategories(user, catToAdd) {
      var cat = this.database[user][2].concat(catToAdd);
      this.setState({
        database: this.database[user][2] = cat
      });
    }

    render() {
      return (
          <div className="userdata">
              {/* <h1>Test user data</h1>
               TODO: Add more menu items with onSelect handlers
              <input type="text" placeholder="Search" onChange={this.onSearch} />
            <p> {this.getUser("defaultUser", "password")} </p>
            <p> {this.addUser("testUser", "email", "pass")} </p> */}
          </div>
        );
    }


  }

  export default UserData;
