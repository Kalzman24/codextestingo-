import React, { FC } from "react";

// Types
export type iCardItem = {
	title: string;
	description: string;
	tag: string;
	src: string;
	link: string;
	color: string;
	textColor: string;
}

type iCardProps = Omit<iCardItem, "src" | "link" | "tag"> & {
	i: number;
	src: string;
};

// Components
const Card: FC<iCardProps> = ({
	title,
	description,
	color,
	textColor,
	i,
	src,
}) => {
	const isDashboardCard = i === 1;

    // Style for the blurred overlay that will be masked
    const blurOverlayStyle: React.CSSProperties = {
        // The mask is now opaque in the center (top-left) and transparent at the edges.
        // This reveals the blurred image overlay behind the text and fades to the
        // sharp image at the edges, creating a focal blur effect.
        maskImage: 'radial-gradient(circle at 25% 25%, black 20%, transparent 50%)',
        WebkitMaskImage: 'radial-gradient(circle at 25% 25%, black 20%, transparent 50%)',
    };

	return (
		<div className="h-screen flex items-center justify-center sticky top-0 p-4 md:p-8">
			<div
				className="relative flex flex-col h-full max-h-[500px] w-full max-w-4xl py-12 px-10 md:px-12
				mx-auto shadow-2xl rounded-3xl overflow-hidden items-start justify-start"
				style={{ backgroundColor: color }}
			>
				<div className="absolute inset-0 z-0">
					<img
						className={`w-full h-full object-cover ${isDashboardCard ? 'scale-125' : ''}`}
						src={src}
						alt={title}
					/>
                    {isDashboardCard && (
                         <img
                            className="absolute inset-0 w-full h-full object-cover scale-125 blur-md"
                            src={src}
                            alt="" // Decorative
                            style={blurOverlayStyle}
                        />
                    )}
				</div>
                <div className="absolute inset-0 bg-black/40 z-0"></div>
				<div className="relative z-10 text-left p-6">
                    <h3
                        className="font-bold relative mb-4 tracking-tight text-4xl md:text-5xl"
                        style={{color: textColor}}
                    >
                        {title}
                    </h3>
                    <p
                        className="font-medium text-sm md:text-base max-w-md"
                        style={{lineHeight: 1.4, color: textColor}}
                    >
                        {description}
                    </p>
				</div>
			</div>
		</div>
	);
};

type iCardSlideProps = {
	items: iCardItem[];
};

const CardsParallax: FC<iCardSlideProps> = ({items}) => {
	return (
		<div className="relative">
			{items.map((project, i) => {
				return <Card key={`p_${i}`} {...project} i={i} />;
			})}
		</div>
	);
};

export { CardsParallax };