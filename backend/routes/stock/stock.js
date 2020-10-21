module.exports = (req, res) => {
  const stock = "hello from backend stock";

  try {
    return res.status(200).json({
      success: true,
      st,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
