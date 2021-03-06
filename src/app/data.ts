import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
        { id: '1', label: 'Manage payment details', group: 'Publisher' },
        { id: '2', label: 'Review payment details changes', group: 'Provider' },
        { id: '3', label: 'See overview of upcoming payments', group: 'Advertiser' },
        { id: '4', label: 'See payment history', group: 'Advertiser' },
        { id: '5', label: 'See Self billed invoice', group: 'Advertiser' },
        { id: '6', label: 'Issue self billed invoice', group: 'Publisher' },
        { id: '7', label: 'Export payments by method', group: 'Provider' },
        { id: '8', label: 'Manage payments runs', group: 'Provider' },
        { id: '9', label: 'Issue invoices', group: 'Advertiser' },
        { id: '10', label: 'Manage invoice runs', group: 'Provider' },
        { id: '11', label: 'Execute payment runs', group: 'Provider' },
        { id: '12', label: 'Manage debtors', group: 'Provider' },
        { id: '13', label: 'Manage advertiser payment status', group: 'Provider' },
        { id: '14', label: 'Manage advertiser fees', group: 'Provider' },
        { id: '15', label: 'View average payment time', group: 'Advertiser_Publisher' },
        { id: '16', label: 'Send pre-payment requests', group: 'Advertiser_Provider' },
        { id: '17', label: 'Manage Advertiser s financial program settings and invoice settings', group: 'Provider' },
        { id: '18', label: 'Block payments to Publisher', group: 'Provider' },
        { id: '19', label: 'See account balance', group: 'Advertiser' },
        { id: '20', label: 'Update account balance', group: 'Provider' },
        { id: '21', label: 'Configure Tracking', group: 'Provider' },
        { id: '22', label: 'Configure Channels', group: 'Provider' },
        { id: '23', label: 'Record click event', group: 'Advertiser_Publisher' },
        { id: '24', label: 'Record view event', group: 'Advertiser_Publisher' },
        { id: '25', label: 'Record transaction', group: 'Advertiser_Publisher' },
        { id: '26', label: 'Record additional product data (basket)', group: 'Advertiser_Publisher' },
        { id: '27', label: 'Record cross-device data', group: 'Advertiser_Publisher' },
        { id: '28', label: 'Match click to transaction', group: 'Advertiser_Publisher' },
        { id: '29', label: 'Match view to transaction', group: 'Advertiser_Publisher' },
        { id: '30', label: 'Match assists to transactions', group: 'Advertiser_Publisher' },
        { id: '31', label: 'Match via custom matching rules from plugins', group: 'Advertiser_Publisher' },
        { id: '32', label: 'Evaluate payment models', group: 'Advertiser_Publisher' },
        { id: '33', label: 'Match cross-device click to transaction', group: 'Advertiser_Publisher' },
        { id: '34', label: 'Configure Mastertag', group: 'Provider' },
        { id: '35', label: 'Integrate Advertiser Mastertag', group: 'Advertiser' },
        { id: '36', label: 'Integrate Publisher Mastertag', group: 'Publisher' },
        { id: '37', label: 'Integrate Publisher MasterTag Plugins', group: 'Publisher' },
        { id: '38', label: 'Integrate E-Commerce plugins', group: 'Advertiser' },
        { id: '39', label: 'See transactions (report)', group: 'Advertiser_Publisher' },
        { id: '40', label: 'Transaction Notification Callback', group: 'Publisher' },
        { id: '41', label: 'API: Get commission group info', group: 'Publisher_Service Partner' },
        { id: '42', label: 'API: Get joined program info', group: 'Publisher_Service Partner' },
        { id: '43', label: 'API: Get transaction details', group: 'Publisher_Service Partner' },
        { id: '44', label: 'API: Get commission sharing rules', group: 'Advertiser' },
        { id: '45', label: 'API: Get associated accounts', group: 'Publisher' },
        { id: '46', label: 'API: Get transaction details', group: 'Advertiser_Service Partner' },
        { id: '47', label: 'API: Get joined publishers info', group: 'Advertiser_Service Partner' },
        { id: '48', label: 'See partner performance report', group: 'Advertiser_Publisher' },
        { id: '49', label: 'See performance over time report', group: 'Advertiser_Publisher' },
        { id: '50', label: 'See device performance report', group: 'Advertiser_Publisher' },
        { id: '51', label: 'See Product performance report', group: 'Advertiser_Publisher' },
        { id: '52', label: 'See Commission group performance report', group: 'Advertiser_Publisher' },
        { id: '53', label: 'See Creative performance', group: 'Advertiser_Publisher' },
        { id: '54', label: 'See Year on Year comparison report', group: 'Advertiser' },
        { id: '55', label: 'See Publisher Performance Comparison report', group: 'Advertiser' },
        { id: '56', label: 'See click reference report', group: 'Publisher' },
        { id: '57', label: 'See linked accounts on User Dashboard', group: 'User' },
        { id: '58', label: 'See user activities on User Dashboard', group: 'User' },
        { id: '59', label: 'Signup new user', group: 'User' },
        { id: '60', label: 'Configure user account', group: 'User' },
        { id: '61', label: 'Signup new publisher', group: 'Publisher' },
        { id: '62', label: 'Invite user to account', group: 'Advertiser_Publisher' },
        { id: '63', label: 'Manage user permissions for account', group: 'Advertiser_Publisher' },
        { id: '64', label: 'Manage user visibility for advertiser account', group: 'Advertiser' },
        { id: '65', label: 'Manage user visibility for publisher account', group: 'Publisher' },
        { id: '66', label: 'Manage advertiser account configuration and profile', group: 'Advertiser' },
        { id: '67', label: 'Manage publisher account configurationand profile', group: 'Publisher' },
        { id: '68', label: 'Search publishers in directory', group: 'Advertiser' },
        { id: '69', label: 'Search advertiser in directory', group: 'Publisher' },
        { id: '70', label: 'Manage memberships with publishers', group: 'Advertiser' },
        { id: '71', label: 'Manage memberships with advertisers', group: 'Publisher' },
        { id: '72', label: 'Search for opportunities', group: 'Advertiser' },
        { id: '73', label: 'Offer opportunities', group: 'Publisher' },
        { id: '74', label: 'See account activities', group: 'Advertiser' },
        { id: '75', label: 'See account activities', group: 'Publisher' },
        { id: '76', label: 'Publish news to publishers', group: 'Advertiser' },
        { id: '77', label: 'Read news from advertisers', group: 'Publisher' },
        { id: '78', label: 'Send system notifications', group: 'Provider' },
        { id: '79', label: 'See promoted advertisers on dashboard', group: 'Publisher' },
        { id: '80', label: 'Manage Advertiser Promotions', group: 'Provider' },
        { id: '81', label: 'Login as user', group: 'User' },
        { id: '82', label: 'Login as user with elevated privilieges (provider)', group: 'User' },
        { id: '83', label: 'Provide demo-accounts', group: 'Provider' },
        { id: '84', label: 'Manage commission groups', group: 'Advertiser' },
        { id: '85', label: 'Manage commission templates', group: 'Advertiser' },
        { id: '86', label: 'Manage Bonuses', group: 'Advertiser' },
        { id: '87', label: 'Manage commission by assist rules', group: 'Advertiser' },
        { id: '88', label: 'Manage commission sharing rules', group: 'Advertiser' },
        { id: '89', label: 'Manage CPC campaign', group: 'Advertiser' },
        { id: '90', label: 'Manage commission by basket-value', group: 'Advertiser' },
        { id: '91', label: 'Manage manual commissions', group: 'Advertiser' },
        { id: '92', label: 'Validate Pending Transactions', group: 'Advertiser' },
        { id: '93', label: 'Import transactions (offline processing)', group: 'Advertiser' },
        { id: '94', label: 'Reverse transactions', group: 'Provider' },
        { id: '95', label: 'Manage transaction queries', group: 'Publisher' },
        { id: '96', label: 'Integrate commission calculation plugins', group: 'Advertiser' },
        { id: '97', label: 'Integrate matching plugins', group: 'Advertiser' },
        { id: '98', label: 'Manage creatives', group: 'Advertiser' },
        { id: '99', label: 'View creatives', group: 'Publisher' },
        { id: '100', label: 'Create deeplink', group: 'Publisher' },
        { id: '101', label: 'Manage MyOffers promotions', group: 'Advertiser' },
        { id: '102', label: 'View MyOffers promotions', group: 'Publisher' },
        { id: '103', label: 'Manage Product Data feeds', group: 'Advertiser' },
        { id: '104', label: 'Download Product Data feeds', group: 'Publisher' },
        { id: '105', label: 'Ask for E-Mail campaign approval', group: 'Publisher' },
        { id: '106', label: 'Review E-Mail campaign proposals', group: 'Advertiser' },
        { id: '107', label: 'Manage API keys', group: 'User' }
];

export const links: Edge[] = [
  { source: '1', target:'2' },
        { source: '1', target:'3' },
        { source: '1', target:'7' },
        { source: '1', target:'11' },
        { source: '6', target:'5' },
        { source: '6', target:'11' },
        { source: '8', target:'3' },
        { source: '8', target:'4' },
        { source: '8', target:'7' },
        { source: '8', target:'12' },
        { source: '8', target:'15' },
        { source: '8', target:'39' },
        { source: '10', target:'11' },
        { source: '11', target:'8' },
        { source: '13', target:'10' },
        { source: '13', target:'11' },
        { source: '18', target:'11' },
        { source: '20', target:'16' },
        { source: '20', target:'19' },
        { source: '21', target:'23' },
        { source: '21', target:'24' },
        { source: '21', target:'25' },
        { source: '21', target:'26' },
        { source: '21', target:'27' },
        { source: '23', target:'28' },
        { source: '23', target:'30' },
        { source: '23', target:'33' },
        { source: '23', target:'40' },
        { source: '23', target:'48' },
        { source: '23', target:'49' },
        { source: '23', target:'50' },
        { source: '23', target:'53' },
        { source: '23', target:'54' },
        { source: '23', target:'55' },
        { source: '23', target:'56' },
        { source: '24', target:'29' },
        { source: '25', target:'28' },
        { source: '25', target:'29' },
        { source: '25', target:'30' },
        { source: '25', target:'33' },
        { source: '25', target:'39' },
        { source: '25', target:'43' },
        { source: '25', target:'46' },
        { source: '25', target:'48' },
        { source: '25', target:'49' },
        { source: '25', target:'50' },
        { source: '25', target:'51' },
        { source: '25', target:'52' },
        { source: '25', target:'55' },
        { source: '25', target:'92' },
        { source: '25', target:'94' },
        { source: '27', target:'33' },
        { source: '27', target:'39' },
        { source: '27', target:'50' },
        { source: '28', target:'32' },
        { source: '29', target:'32' },
        { source: '30', target:'32' },
        { source: '31', target:'32' },
        { source: '32', target:'9' },
        { source: '32', target:'39' },
        { source: '32', target:'40' },
        { source: '32', target:'48' },
        { source: '32', target:'49' },
        { source: '32', target:'50' },
        { source: '32', target:'51' },
        { source: '32', target:'52' },
        { source: '32', target:'53' },
        { source: '32', target:'54' },
        { source: '32', target:'55' },
        { source: '59', target:'60' },
        { source: '59', target:'62' },
        { source: '59', target:'63' },
        { source: '59', target:'64' },
        { source: '59', target:'65' },
        { source: '59', target:'81' },
        { source: '59', target:'107' },
        { source: '61', target:'1' },
        { source: '61', target:'2' },
        { source: '61', target:'3' },
        { source: '61', target:'6' },
        { source: '61', target:'7' },
        { source: '61', target:'8' },
        { source: '61', target:'11' },
        { source: '61', target:'18' },
        { source: '61', target:'23' },
        { source: '61', target:'24' },
        { source: '61', target:'25' },
        { source: '61', target:'26' },
        { source: '61', target:'27' },
        { source: '61', target:'28' },
        { source: '61', target:'29' },
        { source: '61', target:'30' },
        { source: '61', target:'31' },
        { source: '61', target:'32' },
        { source: '61', target:'33' },
        { source: '61', target:'34' },
        { source: '61', target:'36' },
        { source: '61', target:'37' },
        { source: '61', target:'39' },
        { source: '61', target:'40' },
        { source: '61', target:'42' },
        { source: '61', target:'43' },
        { source: '61', target:'44' },
        { source: '61', target:'45' },
        { source: '61', target:'46' },
        { source: '61', target:'47' },
        { source: '61', target:'55' },
        { source: '61', target:'57' },
        { source: '61', target:'63' },
        { source: '61', target:'65' },
        { source: '61', target:'67' },
        { source: '61', target:'68' },
        { source: '61', target:'70' },
        { source: '61', target:'71' },
        { source: '61', target:'72' },
        { source: '61', target:'73' },
        { source: '61', target:'74' },
        { source: '61', target:'75' },
        { source: '61', target:'76' },
        { source: '61', target:'77' },
        { source: '61', target:'78' },
        { source: '61', target:'79' },
        { source: '61', target:'80' },
        { source: '61', target:'84' },
        { source: '61', target:'85' },
        { source: '61', target:'86' },
        { source: '61', target:'87' },
        { source: '61', target:'88' },
        { source: '61', target:'89' },
        { source: '61', target:'90' },
        { source: '61', target:'91' },
        { source: '61', target:'92' },
        { source: '61', target:'93' },
        { source: '61', target:'94' },
        { source: '61', target:'95' },
        { source: '61', target:'98' },
        { source: '61', target:'99' },
        { source: '61', target:'101' },
        { source: '61', target:'102' },
        { source: '61', target:'103' },
        { source: '61', target:'104' },
        { source: '61', target:'105' },
        { source: '61', target:'106' },
        { source: '62', target:'57' },
        { source: '62', target:'63' },
        { source: '63', target:'1' },
        { source: '63', target:'3' },
        { source: '63', target:'4' },
        { source: '63', target:'5' },
        { source: '63', target:'6' },
        { source: '63', target:'9' },
        { source: '63', target:'15' },
        { source: '63', target:'19' },
        { source: '63', target:'39' },
        { source: '63', target:'40' },
        { source: '63', target:'48' },
        { source: '63', target:'49' },
        { source: '63', target:'50' },
        { source: '63', target:'51' },
        { source: '63', target:'52' },
        { source: '63', target:'53' },
        { source: '63', target:'54' },
        { source: '63', target:'55' },
        { source: '63', target:'56' },
        { source: '63', target:'62' },
        { source: '63', target:'64' },
        { source: '63', target:'65' },
        { source: '63', target:'66' },
        { source: '63', target:'67' },
        { source: '63', target:'68' },
        { source: '63', target:'69' },
        { source: '63', target:'70' },
        { source: '63', target:'71' },
        { source: '63', target:'72' },
        { source: '63', target:'73' },
        { source: '63', target:'76' },
        { source: '63', target:'77' },
        { source: '63', target:'79' },
        { source: '63', target:'84' },
        { source: '63', target:'85' },
        { source: '63', target:'86' },
        { source: '63', target:'87' },
        { source: '63', target:'88' },
        { source: '63', target:'89' },
        { source: '63', target:'90' },
        { source: '63', target:'91' },
        { source: '63', target:'92' },
        { source: '63', target:'93' },
        { source: '63', target:'95' },
        { source: '63', target:'98' },
        { source: '63', target:'99' },
        { source: '63', target:'101' },
        { source: '63', target:'103' },
        { source: '63', target:'105' },
        { source: '63', target:'106' },
        { source: '63', target:'107' },
        { source: '70', target:'31' },
        { source: '70', target:'32' },
        { source: '70', target:'39' },
        { source: '70', target:'42' },
        { source: '70', target:'47' },
        { source: '70', target:'48' },
        { source: '70', target:'49' },
        { source: '70', target:'50' },
        { source: '70', target:'51' },
        { source: '70', target:'52' },
        { source: '70', target:'53' },
        { source: '70', target:'55' },
        { source: '70', target:'57' },
        { source: '70', target:'68' },
        { source: '70', target:'69' },
        { source: '70', target:'70' },
        { source: '70', target:'71' },
        { source: '70', target:'72' },
        { source: '70', target:'73' },
        { source: '70', target:'76' },
        { source: '70', target:'77' },
        { source: '70', target:'84' },
        { source: '70', target:'85' },
        { source: '70', target:'86' },
        { source: '70', target:'87' },
        { source: '70', target:'88' },
        { source: '70', target:'89' },
        { source: '70', target:'90' },
        { source: '70', target:'91' },
        { source: '70', target:'92' },
        { source: '70', target:'93' },
        { source: '70', target:'94' },
        { source: '70', target:'95' },
        { source: '70', target:'98' },
        { source: '70', target:'99' },
        { source: '70', target:'100' },
        { source: '70', target:'101' },
        { source: '70', target:'102' },
        { source: '70', target:'103' },
        { source: '70', target:'104' },
        { source: '70', target:'105' },
        { source: '70', target:'106' },
        { source: '71', target:'31' },
        { source: '71', target:'32' },
        { source: '71', target:'39' },
        { source: '71', target:'42' },
        { source: '71', target:'47' },
        { source: '71', target:'48' },
        { source: '71', target:'49' },
        { source: '71', target:'50' },
        { source: '71', target:'51' },
        { source: '71', target:'52' },
        { source: '71', target:'53' },
        { source: '71', target:'55' },
        { source: '71', target:'57' },
        { source: '71', target:'68' },
        { source: '71', target:'69' },
        { source: '71', target:'70' },
        { source: '71', target:'71' },
        { source: '71', target:'72' },
        { source: '71', target:'73' },
        { source: '71', target:'76' },
        { source: '71', target:'77' },
        { source: '71', target:'84' },
        { source: '71', target:'85' },
        { source: '71', target:'86' },
        { source: '71', target:'87' },
        { source: '71', target:'88' },
        { source: '71', target:'89' },
        { source: '71', target:'90' },
        { source: '71', target:'91' },
        { source: '71', target:'92' },
        { source: '71', target:'93' },
        { source: '71', target:'94' },
        { source: '71', target:'95' },
        { source: '71', target:'98' },
        { source: '71', target:'99' },
        { source: '71', target:'100' },
        { source: '71', target:'101' },
        { source: '71', target:'102' },
        { source: '71', target:'103' },
        { source: '71', target:'104' },
        { source: '71', target:'105' },
        { source: '71', target:'106' },
        { source: '73', target:'72' },
        { source: '76', target:'77' },
        { source: '80', target:'79' },
        { source: '82', target:'2' },
        { source: '82', target:'7' },
        { source: '82', target:'8' },
        { source: '82', target:'10' },
        { source: '82', target:'11' },
        { source: '82', target:'12' },
        { source: '82', target:'13' },
        { source: '82', target:'14' },
        { source: '82', target:'16' },
        { source: '82', target:'17' },
        { source: '82', target:'18' },
        { source: '82', target:'20' },
        { source: '82', target:'21' },
        { source: '82', target:'22' },
        { source: '82', target:'34' },
        { source: '82', target:'78' },
        { source: '82', target:'80' },
        { source: '82', target:'83' },
        { source: '82', target:'94' },
        { source: '84', target:'32' },
        { source: '84', target:'41' },
        { source: '84', target:'48' },
        { source: '84', target:'51' },
        { source: '84', target:'52' },
        { source: '84', target:'53' },
        { source: '85', target:'32' },
        { source: '86', target:'9' },
        { source: '86', target:'11' },
        { source: '87', target:'32' },
        { source: '88', target:'32' },
        { source: '89', target:'32' },
        { source: '90', target:'32' },
        { source: '91', target:'9' },
        { source: '91', target:'39' },
        { source: '91', target:'40' },
        { source: '91', target:'48' },
        { source: '91', target:'49' },
        { source: '91', target:'50' },
        { source: '91', target:'51' },
        { source: '91', target:'52' },
        { source: '91', target:'53' },
        { source: '91', target:'54' },
        { source: '91', target:'55' },
        { source: '93', target:'28' },
        { source: '93', target:'29' },
        { source: '93', target:'30' },
        { source: '93', target:'33' },
        { source: '93', target:'39' },
        { source: '93', target:'43' },
        { source: '93', target:'46' },
        { source: '93', target:'48' },
        { source: '93', target:'49' },
        { source: '93', target:'50' },
        { source: '93', target:'51' },
        { source: '93', target:'52' },
        { source: '93', target:'55' },
        { source: '93', target:'92' },
        { source: '93', target:'94' },
        { source: '95', target:'28' },
        { source: '95', target:'29' },
        { source: '95', target:'30' },
        { source: '95', target:'33' },
        { source: '95', target:'39' },
        { source: '95', target:'43' },
        { source: '95', target:'46' },
        { source: '95', target:'48' },
        { source: '95', target:'49' },
        { source: '95', target:'50' },
        { source: '95', target:'51' },
        { source: '95', target:'52' },
        { source: '95', target:'55' },
        { source: '95', target:'92' },
        { source: '95', target:'94' },
        { source: '96', target:'32' },
        { source: '97', target:'31' },
        { source: '98', target:'53' },
        { source: '98', target:'99' },
        { source: '101', target:'102' },
        { source: '103', target:'40' },
        { source: '103', target:'48' },
        { source: '103', target:'51' },
        { source: '103', target:'104' },
        { source: '105', target:'106' },
        { source: '107', target:'41' },
        { source: '107', target:'42' },
        { source: '107', target:'43' },
        { source: '107', target:'44' },
        { source: '107', target:'45' },
        { source: '107', target:'46' },
        { source: '107', target:'47' }
];