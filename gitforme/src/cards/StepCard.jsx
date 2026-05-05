import { motion, AnimatePresence } from 'framer-motion';

const StepCard = ({ number, title, children }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        }}
        className="flex-1 min-w-[280px] card-gradient hover:shadow-large transition-all duration-300 group hover:scale-105">
        <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold flex-shrink-0 shadow-medium group-hover:shadow-glow transition-all duration-300">
                {number}
            </div>
            <h3 className="text-xl font-bold text-neutral-800">{title}</h3>
        </div>
        <p className="text-neutral-600 leading-relaxed">{children}</p>
    </motion.div>
);
export default StepCard;