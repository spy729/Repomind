import { motion, AnimatePresence } from 'framer-motion';

const FeatureCard = ({ icon, title, children }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        }}
        className="card-gradient hover:shadow-large transition-all duration-300 h-full group hover:scale-105">
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-xl text-white shadow-medium group-hover:shadow-glow transition-all duration-300">{icon}</div>
            <h3 className="text-xl font-bold text-neutral-800">{title}</h3>
        </div>
        <p className="text-neutral-600 leading-relaxed">{children}</p>
    </motion.div>
);

export default FeatureCard;