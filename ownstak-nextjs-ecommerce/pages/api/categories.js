import { categories } from '../../data/categories';        

export default function handler(_req, res) {
  res.status(200).json(categories);
}