const supabase = require("../config/Supa");

module.exports = {
  createAccount,
  signInWithEmail,
    signOut,
  deleteAccount
};

async function createAccount(req, res) {
  const { data, error } = await supabase.auth.signUp({
    email: "rdevcharles@protonmail.com",
    password: "example-password",
    options: {
      data: {
        first_name: "John",
        last_name: "Doe",
        age: 27,
        is_admin: false,
        address: "123 Main St.",
        zip_code: 12345,
        apartment: "Apt. 1",
      },
    },
  });

  try {
    res.send(data);
  } catch (error) {
    console.log(error);
  }
}

async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "example@email.com",
    password: "example-password",
  });
}

async function signOut() {
  const { error } = await supabase.auth.signOut();
}

async function deleteAccount(req, res) {
  //delete account
}