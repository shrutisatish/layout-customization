import React from 'react';
import StandardCell from './standard'

class ListLayout extends React.Component {

  render(){
    return (
      <div>
						<ul>
							{
								this.props.data.map((container, index) => {
									return (
                    <li key={container.name}>
                      <StandardCell container={container} />
                    </li>
                  );

								})
							}
						</ul>
					</div>
      );
  }
}

export default ListLayout;
