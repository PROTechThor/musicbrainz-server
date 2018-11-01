/*
 * @flow
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

const React = require('react');
const {lp} = require('../static/scripts/common/i18n');
const {lp_attributes} = require('../static/scripts/common/i18n/attributes');
const EntityHeader = require('../components/EntityHeader');

type Props = {|
  page: string,
  series: SeriesT,
|};

const SeriesHeader = ({series, page}: Props) => (
  <EntityHeader
    entity={series}
    headerClass="seriesheader"
    page={page}
    subHeading={series.typeName ? lp_attributes(series.typeName, 'series_type') : lp('Series', 'singular')}
  />
);

module.exports = SeriesHeader;
