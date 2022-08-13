import React from 'react';

import {
	StyledIntroductionContent,
	StyledIntroductionSpacing,
	StyledIntroductionHeading,
	StyledIntroductionListItem,
	StyledIntroductionVersion,
} from './Styles';
function Introduction() {
	return (
		<>
			<div>
				<StyledIntroductionVersion>Install</StyledIntroductionVersion>
				
			</div>

			<div>
				<StyledIntroductionSpacing>
					<StyledIntroductionHeading>
						✨ Features
					</StyledIntroductionHeading>
					<ul>
						<StyledIntroductionListItem>
							A UI design system for web applications.
						</StyledIntroductionListItem>
						<StyledIntroductionListItem>
							A set of high-quality React components out of the box.
						</StyledIntroductionListItem>
						<StyledIntroductionListItem>
							Written in TypeScript with predictable static types.
						</StyledIntroductionListItem>
					</ul>
				</StyledIntroductionSpacing>
			</div>
			
			<div>
				<StyledIntroductionHeading>
					🖥 Environment Support
				</StyledIntroductionHeading>
				<ul>
					<StyledIntroductionListItem>
						Modern browsers and Internet Explorer 9+ (with polyfills)
					</StyledIntroductionListItem>
				</ul>
				<StyledIntroductionContent>
					IE9, IE10, IE11, Edge| last 2 versions| last 2 versions| last 2
					versions| last 2 versions| last 2 versions
				</StyledIntroductionContent>
			</div>

		</>
	);
}

export default Introduction;
