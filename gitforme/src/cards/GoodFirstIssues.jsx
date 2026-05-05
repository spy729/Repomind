
export const GoodFirstIssues = ({ issues }) => {
    if (!issues || issues.length === 0) {
        return <p className="text-base text-neutral-500">This project doesn't have any issues labeled for new contributors right now. Check back later!</p>;
    }
    return (
        <>
            <p className="text-base text-neutral-600 mb-4">These issues are flagged as good starting points for new contributors.</p>
            <ul className="space-y-3">
                {issues.map(issue => (
                    <li key={issue.id}>
                        <a href={issue.html_url} target="_blank" rel="noopener noreferrer" className="block p-4 card hover:shadow-medium hover:scale-105 transition-all duration-300">
                            <p className="font-bold text-lg text-neutral-800">{issue.title}</p>
                            <p className="text-base text-neutral-600 mt-1">#{issue.number} &bull; {issue.comments} comments</p>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};
