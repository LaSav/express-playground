const signup = (req, res) => {
  console.log(req.rateLimit.remaining);
  if (req.rateLimit.remaining === 0) {
    return res.status(429).send('Too many requests, please try again later');
  }
  // TESTING PURPOSE VARIABLE:
  const honeyPotValue = true;
  if (honeyPotValue) {
    // Handle Spam:
    res.status(403).json(`honeypot value is ${honeyPotValue}`);
  } else {
    console.log(req.body.name);
    res.status(200).json(req.body.name);
  }
};

module.exports = { signup };
