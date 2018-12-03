/*
 * @flow
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */
 
import * as React from 'react';
import {CatalystContext} from '../context';
import DBDefs from '../static/scripts/common/DBDefs';
import {l} from '../static/scripts/common/i18n';

const Results = ({results}) => (
<p> 
  {(editors.length)
          ? <Frag>
             
            </Frag>
          : null}
</p>
)


const Results = () => {
  }
  
  return (
    <Layout title={l('Privileged User Accounts')} fullWidth={true}>
      <div id="content">
        <h1>{l("Privileged User Accounts")}</h1>

        <h2>{l("Auto-editors")}</h2>
        <p>{l('Auto-editors are trusted users who have been given {url|auto-editor} privileges.
             These privileges allow them to make select edits that are automatically approved
             without going through the normal voting process, as well as the ability to
             instantly approve other users\' edits.', { url => doc_link('Editor') }) }</p>
        <p>{ l('The following {count} users have auto-editor privileges:', { count => auto_editors.size }) }</p>
        [%- INCLUDE results editors=auto_editors -%]

        <h2>{l("Relationship editors") }</h2>
        <p>{ l('Relationship editors are users who can add or modify relationship types in the
             database. If you would like to propose a new relationship, please do so through
             the {url|Style Council}. Relationship editors will only make changes that have
             been approved by the Style Council.', { url => doc_link('Style_Council') }) }</p>
        <p>{ l('The following {count} users are relationship editors:', { count => relationship_editors.size }) }</p>
        [%- INCLUDE results editors=relationship_editors -%]

        <h2>{ l("Transclusion editors") }</h2>
        <p>{ l('Transclusion editors are users who add and maintain entries in the {uri|WikiDocs}
             transclusion table.', { uri => doc_link('WikiDocs') }) }</p>
        <p>{ l('The following {count} users are transclusion editors:', { count => transclusion_editors.size }) }</p>
        [%- INCLUDE results editors=transclusion_editors -%]

        <h2>{ l("Location editors") }</h2>
        <p>{ l('Location editors are users who can add or modify {uri|areas}.',
             { uri => doc_link('Area') }) }</p>
        <p>{ l('The following {count} users are location editors:', { count => location_editors.size }) }</p>
        [%- INCLUDE results editors=location_editors -%]

        <h2>{ l('Banner message editors') }</h2>
        <p>{ l('Banner message editors are users who can set a message that is shown in a banner on all pages,
             e.g. to warn users about upcoming site maintenance.') }</p>
        <p>{ l('The following {count} users are banner message editors:', { count => banner_editors.size }) }</p>
        [%- INCLUDE results editors=banner_editors -%]

        <h2>{ l('Account administrators') }</h2>
        <p>{ l('Account administrators can edit and delete user accounts.') }</p>
        <p>{ l('The following {count} users are account administrators:', { count => account_admins.size }) }</p>
        [%- INCLUDE results editors=account_admins -%]

        <h2>{ l("Bots") }</h2>
        <p>{ l('The following {count} user accounts are bots:', { count => bots.size }) }</p>
        [%- INCLUDE results editors=bots -%]
        
        
      </div>
    </Layout>
  );
};

  
module.exports = PrivilegedUserAccounts;
