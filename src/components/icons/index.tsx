import { Trash } from 'lucide-react'

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
	Logo: (props: IconProps) => (
		<svg
			viewBox="0 0 1024 1024"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			fill="currentColor"
		>
			<path d="M225.5872 326.4a29.0304 29.0304 0 0 0-9.472-24.5248l-70.144-84.48V204.8h217.7024l168.2944 369.0496L679.936 204.8h207.5136v12.5952L827.4944 274.944a17.5616 17.5616 0 0 0-6.656 16.8448v422.4c-1.024 6.4 1.536 12.8 6.656 16.7936l58.5216 57.4464v12.6464h-294.4v-12.6464l60.5696-58.88c5.9392-5.9392 5.9392-7.68 5.9392-16.7936V371.3024L489.472 799.5904h-22.7328L270.336 371.3024v287.0272a39.68 39.68 0 0 0 10.8544 32.9728l78.848 95.744v12.544H136.5504v-12.5952l78.848-95.744a38.1952 38.1952 0 0 0 10.1888-32.9216V326.4z"></path>
		</svg>
	),
	Spinner: (props: IconProps) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M21 12a9 9 0 1 1-6.219-8.56" />
		</svg>
	),
	Back: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M180.864 277.5808c-16.25088 12.288-16.25088 36.7104 0 48.9984L321.9456 433.31072c20.23424 15.3088 49.2544 0.87552 49.2544-24.4992V343.04h201.77408c118.48192 0 214.53312 89.3952 214.53312 199.68 0 110.27968-96.0512 199.68-214.53312 199.68H240.64a30.72 30.72 0 0 0-30.72 30.72v20.48a30.72 30.72 0 0 0 30.72 30.72h332.33408C740.06528 824.32 875.52 698.24512 875.52 542.72s-135.45472-281.6-302.54592-281.6H371.2V195.34848c0-25.37472-29.02016-39.808-49.2544-24.4992L180.864 277.5808z"></path>
			</svg>
		)
	},
	At: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M67.565714 514.139429c0 282.422857 191.140571 453.851429 454.290286 453.851428 70.710857 0 138.861714-9.856 180.845714-23.570286 29.586286-9.417143 39.003429-24.850286 39.003429-40.704s-12.434286-27.867429-28.708572-27.867428c-4.717714 0-11.574857 0.859429-20.132571 2.998857-52.297143 12.873143-96.859429 21.430857-157.293714 21.430857-234.861714 0-394.294857-141.421714-394.294857-383.561143 0-231.862857 150.857143-393.435429 378.002285-393.435428 201.014857 0 369.005714 123.867429 369.005715 346.294857 0 129.846857-44.141714 217.289143-114.432 217.289143-47.140571 0-74.130286-27.428571-74.130286-74.148572v-290.56c0-23.149714-12.854857-37.302857-34.285714-37.302857-21.430857 0-35.145143 14.153143-35.145143 37.302857v48.841143h-3.858286c-21.869714-52.717714-75.428571-86.125714-138.861714-86.125714-110.994286 0-189.001143 94.701714-189.001143 230.546286 0 137.142857 77.568 232.722286 190.72 232.722285 66.011429 0 117.430857-36.004571 142.281143-96.859428h3.84c8.594286 60.434286 59.154286 97.28 127.305143 97.28 119.570286 0 193.718857-117.412571 193.718857-281.984 0-249.014857-183.442286-410.569143-436.297143-410.569143-266.130286 0-452.571429 182.125714-452.571429 458.130286z m433.298286 166.290285c-77.165714 0-125.586286-63.853714-125.586286-165.430857 0-99.84 48.859429-163.712 126.006857-163.712 78.427429 0 128.146286 62.573714 128.146286 162.011429 0 101.558857-50.578286 167.131429-128.566857 167.131428z"></path>
			</svg>
		)
	},
	ArrowDownLeft: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M298.666667 810.666667a42.666667 42.666667 0 0 1-30.293334-12.373334 42.666667 42.666667 0 0 1 0-60.586666l426.666667-426.666667a42.666667 42.666667 0 1 1 60.586667 60.586667l-426.666667 426.666666A42.666667 42.666667 0 0 1 298.666667 810.666667z"></path>
				<path d="M725.333333 810.666667H298.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V341.333333a42.666667 42.666667 0 0 1 85.333333 0v384h384a42.666667 42.666667 0 0 1 0 85.333334z"></path>
			</svg>
		)
	},
	ArrowDownRight: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M768 768a42.666667 42.666667 0 0 1-30.293333-12.373333l-426.666667-426.666667a42.666667 42.666667 0 1 1 60.586667-60.586667l426.666666 426.666667a42.666667 42.666667 0 0 1 0 60.586667A42.666667 42.666667 0 0 1 768 768z"></path>
				<path d="M768 768H341.333333a42.666667 42.666667 0 0 1 0-85.333333h384V298.666667a42.666667 42.666667 0 0 1 85.333334 0v426.666666a42.666667 42.666667 0 0 1-42.666667 42.666667z"></path>
			</svg>
		)
	},
	ArrowDown: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M512 853.333333a42.666667 42.666667 0 0 1-42.666667-42.666666V213.333333a42.666667 42.666667 0 0 1 85.333334 0v597.333334a42.666667 42.666667 0 0 1-42.666667 42.666666z"></path>
				<path d="M512 853.333333a42.666667 42.666667 0 0 1-30.293333-12.373333l-298.666667-298.666667a42.666667 42.666667 0 0 1 60.586667-60.586666l268.373333 268.8 268.373333-268.8a42.666667 42.666667 0 0 1 60.586667 60.586666l-298.666667 298.666667A42.666667 42.666667 0 0 1 512 853.333333z"></path>
			</svg>
		)
	},
	ArrowRight: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M810.666667 597.333333H213.333333a42.666667 42.666667 0 0 1 0-85.333333h597.333334a42.666667 42.666667 0 0 1 0 85.333333z"></path>
				<path d="M512 896a42.666667 42.666667 0 0 1-30.293333-12.373333 42.666667 42.666667 0 0 1 0-60.586667l268.8-268.373333-268.8-268.373334a42.666667 42.666667 0 0 1 60.586666-60.586666l298.666667 298.666666a42.666667 42.666667 0 0 1 0 60.586667l-298.666667 298.666667A42.666667 42.666667 0 0 1 512 896z"></path>
			</svg>
		)
	},
	ArrowUpLeft: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M725.333333 768a42.666667 42.666667 0 0 1-30.293333-12.373333l-426.666667-426.666667a42.666667 42.666667 0 0 1 60.586667-60.586667l426.666667 426.666667a42.666667 42.666667 0 0 1 0 60.586667A42.666667 42.666667 0 0 1 725.333333 768z"></path>
				<path d="M298.666667 768a42.666667 42.666667 0 0 1-42.666667-42.666667V298.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h426.666666a42.666667 42.666667 0 0 1 0 85.333333H341.333333v384a42.666667 42.666667 0 0 1-42.666666 42.666667z"></path>
			</svg>
		)
	},
	ArrowUp: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M512 896a42.666667 42.666667 0 0 1-42.666667-42.666667V256a42.666667 42.666667 0 0 1 85.333334 0v597.333333a42.666667 42.666667 0 0 1-42.666667 42.666667z"></path>
				<path d="M810.666667 597.333333a42.666667 42.666667 0 0 1-30.293334-12.373333L512 316.16l-268.373333 268.8a42.666667 42.666667 0 0 1-60.586667-60.586667l298.666667-298.666666a42.666667 42.666667 0 0 1 60.586666 0l298.666667 298.666666a42.666667 42.666667 0 0 1 0 60.586667A42.666667 42.666667 0 0 1 810.666667 597.333333z"></path>
			</svg>
		)
	},
	ArrowLeft: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M853.333333 597.333333H256a42.666667 42.666667 0 0 1 0-85.333333h597.333333a42.666667 42.666667 0 0 1 0 85.333333z"></path>
				<path d="M554.666667 896a42.666667 42.666667 0 0 1-30.293334-12.373333l-298.666666-298.666667a42.666667 42.666667 0 0 1 0-60.586667l298.666666-298.666666a42.666667 42.666667 0 1 1 60.586667 60.586666L316.16 554.666667l268.8 268.373333a42.666667 42.666667 0 0 1 0 60.586667A42.666667 42.666667 0 0 1 554.666667 896z"></path>
			</svg>
		)
	},
	ArrowUpRight: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M341.333333 768a42.666667 42.666667 0 0 1-30.293333-12.373333 42.666667 42.666667 0 0 1 0-60.586667l426.666667-426.666667a42.666667 42.666667 0 1 1 60.586666 60.586667l-426.666666 426.666667A42.666667 42.666667 0 0 1 341.333333 768z"></path>
				<path d="M768 768a42.666667 42.666667 0 0 1-42.666667-42.666667V341.333333H341.333333a42.666667 42.666667 0 0 1 0-85.333333h426.666667a42.666667 42.666667 0 0 1 42.666667 42.666667v426.666666a42.666667 42.666667 0 0 1-42.666667 42.666667z"></path>
			</svg>
		)
	},
	Dashboard: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M924.8 385.6c-22.6-53.4-54.9-101.3-96-142.4-41.1-41.1-89-73.4-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2c-53.4 22.6-101.3 54.9-142.4 96-41.1 41.1-73.4 89-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6C184.5 765.5 140 665.6 140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276z"></path>
				<path d="M623.5 421.5c-3.1-3.1-8.2-3.1-11.3 0L527.7 506c-18.7-5-39.4-0.2-54.1 14.5-21.9 21.9-21.9 57.3 0 79.2 21.9 21.9 57.3 21.9 79.2 0 14.7-14.7 19.5-35.4 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zM750 538v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zM762.7 340.8l-31.1-31.1c-3.1-3.1-8.2-3.1-11.3 0l-56.6 56.6c-3.1 3.1-3.1 8.2 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zM304.1 309.7c-3.1-3.1-8.2-3.1-11.3 0l-31.1 31.1c-3.1 3.1-3.1 8.2 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z"></path>
			</svg>
		)
	},
	Draft: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M931.84 321.536l-389.12-224.8704a63.0784 63.0784 0 0 0-61.44 0l-389.12 224.8704a20.48 20.48 0 0 0-10.24 17.6128V880.64A61.44 61.44 0 0 0 141.7216 942.08h737.28A61.44 61.44 0 0 0 942.08 880.64V339.1488a20.48 20.48 0 0 0-10.24-17.6128z m-430.08-189.2352a20.48 20.48 0 0 1 20.48 0l373.9648 215.8592-373.9648 215.8592a20.48 20.48 0 0 1-20.48 0L127.7952 348.16zM880.64 901.12h-737.28a20.8896 20.8896 0 0 1-20.48-20.48V392.3968l358.4 207.2576a61.8496 61.8496 0 0 0 61.44 0L901.12 392.3968V880.64a20.48 20.48 0 0 1-20.48 20.48z"></path>
			</svg>
		)
	},
	Post: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M800 192L160 424.672 567.328 832 800 192z m-107.008 107.008l-151.488 416.672-107.008-106.976 161.888-213.088-213.088 161.888-106.976-107.008 416.672-151.488z"></path>
			</svg>
		)
	},
	Photo: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M880.174545 911.941818h-733.090909a122.298182 122.298182 0 0 1-122.181818-122.181818v-443.345455a122.298182 122.298182 0 0 1 122.181818-122.181818h136.378182L360.727273 87.738182a29.090909 29.090909 0 0 1 25.367272-14.778182H640a29.090909 29.090909 0 0 1 24.785455 13.847273l84.596363 137.425454h130.792727a122.298182 122.298182 0 0 1 122.181819 122.181818v443.345455a122.298182 122.298182 0 0 1-122.181819 122.181818z m-733.090909-629.527273a64.116364 64.116364 0 0 0-64 64v443.345455a64.116364 64.116364 0 0 0 64 64h733.090909a64.116364 64.116364 0 0 0 64-64v-443.345455a64.116364 64.116364 0 0 0-64-64H733.090909a29.090909 29.090909 0 0 1-24.785454-13.847272l-84.363637-137.425455h-221.090909L325.818182 267.636364a29.090909 29.090909 0 0 1-25.367273 14.778181z"></path>
				<path d="M513.629091 717.265455A170.356364 170.356364 0 1 1 683.985455 546.909091a170.589091 170.589091 0 0 1-170.356364 170.356364z m0-282.647273A112.174545 112.174545 0 1 0 625.803636 546.909091a112.290909 112.290909 0 0 0-112.174545-112.174546z"></path>
				<path d="M809.890909 343.272727m34.909091 0l0 0q34.909091 0 34.909091 34.909091l0 0q0 34.909091-34.909091 34.909091l0 0q-34.909091 0-34.909091-34.909091l0 0q0-34.909091 34.909091-34.909091Z"></path>
			</svg>
		)
	},
	Music: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M810.550168 57.547768H469.578041c-86.209692 0-156.281057 70.126346-156.281058 156.280058v435.763802c-25.175149-14.718825-54.09998-23.754649-85.241032-23.754649-94.052935 0-170.487063 76.492108-170.487063 170.487063 0 94.051935 76.434129 170.487063 170.487063 170.487063 93.993955 0 170.485064-76.435128 170.485063-170.487063v-582.495216a71.099004 71.099004 0 0 1 71.038026-71.037026h340.972127a71.135991 71.135991 0 0 1 71.038026 71.037026v265.276738c-25.175149-14.718825-54.10198-23.754649-85.243032-23.754648-94.052935 0-170.487063 76.492108-170.487063 170.487063 0 94.051935 76.434129 170.487063 170.487063 170.487063 93.993955 0 170.487063-76.435128 170.487063-170.487063V213.827826c-0.001999-86.152712-70.130345-156.280058-156.283056-156.280058z m-582.495217 824.020306a85.243032 85.243032 0 1 1 85.241032-85.243032 85.310008 85.310008 0 0 1-85.240032 85.243032z m568.289211-170.482065a85.243032 85.243032 0 1 1 85.243032-85.243032 85.311008 85.311008 0 0 1-85.243032 85.243032z"></path>
			</svg>
		)
	},
	Plus: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 15 15"
				fill="none"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path
					d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
					fill="currentColor"
					fillRule="evenodd"
					clipRule="evenodd"
				></path>
			</svg>
		)
	},
	Trash: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 15 15"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				{...props}
			>
				<path
					d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
					fill="currentColor"
					fillRule="evenodd"
					clipRule="evenodd"
				></path>
			</svg>
		)
	},
	Pencil: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 15 15"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				{...props}
			>
				<path
					d="M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z"
					fill="currentColor"
					fillRule="evenodd"
					clipRule="evenodd"
				></path>
			</svg>
		)
	},
	Reload: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 15 15"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				{...props}
			>
				<path
					d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z"
					fill="currentColor"
					fillRule="evenodd"
					clipRule="evenodd"
				></path>
			</svg>
		)
	},
	CaretRight: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
				{...props}
			>
				<path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path>
			</svg>
		)
	},

	Backward: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
				{...props}
			>
				<path d="M485.6 249.9L198.2 498c-8.3 7.1-8.3 20.8 0 27.9l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9zm320 0L518.2 498a18.6 18.6 0 00-6.2 14c0 5.2 2.1 10.4 6.2 14l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9z"></path>
			</svg>
		)
	},
	Pause: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
				{...props}
			>
				<path d="M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z"></path>
			</svg>
		)
	},
	Border: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
				{...props}
			>
				<path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
			</svg>
		)
	},
	Forward: (props: IconProps) => {
		return (
			<svg
				viewBox="0 0 1024 1024"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
				{...props}
			>
				<path d="M825.8 498L538.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L825.8 526c8.3-7.2 8.3-20.8 0-28zm-320 0L218.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L505.8 526c4.1-3.6 6.2-8.8 6.2-14 0-5.2-2.1-10.4-6.2-14z"></path>
			</svg>
		)
	},

	Sound: (props: IconProps) => {
		return (
			<svg
				viewBox="64 64 896 896"
				xmlns="http://www.w3.org/2000/svg"
				width="1rem"
				height="1rem"
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
				{...props}
			>
				<path d="M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z"></path>
			</svg>
		)
	},
}

export default Icons
