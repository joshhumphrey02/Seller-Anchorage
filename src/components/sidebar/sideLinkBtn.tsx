import { NavLink } from "react-router-dom";

interface sideLink {
	key: string;
	label: string;
	path: string;
	icon: JSX.Element;
}

interface sidebar {
	link: sideLink;
	setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

function SideLinkBtn({ link, setSidebar }: sidebar) {
	return (
		<NavLink
			to={link.path}
			onClick={() => setSidebar(() => false)}
			className={
				"font-[RobotoLight] text-sm md:text-base hover:text-primary/90 flex items-center gap-2 px-3 py-2 hover:no-underline rounded-sm"
			}>
			<span className="text-xl">{link.icon}</span>
			<span className={"inline-block"}>{link.label}</span>
		</NavLink>
	);
}

export default SideLinkBtn;
