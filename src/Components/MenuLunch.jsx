import { motion } from "framer-motion";

const MenuLunch = ({ lunch, items }) => {
  const list = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };

  const itemList = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemContainer = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {lunch &&
        items
          .filter((item) => item.category === "lunch")
          .map((item) => (
            <motion.div
              className="menu-items"
              key={item.id}
              initial="hidden"
              animate="visible"
              variants={list}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://miro.medium.com/max/1400/1*nKSANcE0nTsmnFY3w4O1dQ.png"
                alt="food burger"
              />
              <motion.div className="item-content">
                <motion.div className="item-title-box">
                  <motion.h5
                    className="item-title"
                    variants={itemList}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    {item.title}
                  </motion.h5>
                  <motion.h5
                    className="item-price"
                    variants={itemList}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    {item.price}
                  </motion.h5>
                </motion.div>
                <motion.p
                  className="item-desc"
                  variants={itemList}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
    </>
  );
};

export default MenuLunch;