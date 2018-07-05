import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SubRedditsComponent } from './sub-reddits.component';
import { SubRedditCardComponent } from '../sub-reddit-card/sub-reddit-card.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('SubRedditsComponent', () => {
  let component: SubRedditsComponent;
  let fixture: ComponentFixture<SubRedditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SubRedditsComponent,
        SubRedditCardComponent],
      imports: [
        SharedModule,
        RouterTestingModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRedditsComponent);
    component = fixture.componentInstance;
    component.reddits = [
      {
        "kind": "t5",
        "data": {
          "suggested_comment_sort": null,
          "user_flair_background_color": null,
          "hide_ads": false,
          "banner_img": "https://b.thumbs.redditmedia.com/PXt8GnqdYu-9lgzb3iesJBLN21bXExRV1A45zdw4sYE.png",
          "user_flair_text": null,
          "submit_text_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;&lt;strong&gt;AskReddit is all about DISCUSSION. Your post needs to inspire discussion, ask an open-ended question that prompts redditors to share ideas or opinions.&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Questions need to be neutral and the question alone.&lt;/strong&gt; Any opinion or answer must go as a reply to your question, this includes examples or any kind of story about you. This is so that all responses will be to your question, and there&amp;#39;s nothing else to respond to. Opinionated posts are forbidden.&lt;/p&gt;\n\n&lt;ul&gt;\n&lt;li&gt;If your question has a factual answer, try &lt;a href=\"/r/answers\"&gt;/r/answers&lt;/a&gt;.&lt;/li&gt;\n&lt;li&gt;If you are trying to find out about something or get an explanation, try &lt;a href=\"/r/explainlikeimfive\"&gt;/r/explainlikeimfive&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;If your question has a limited number of responses, then it&amp;#39;s not suitable.&lt;/li&gt;\n&lt;li&gt;If you&amp;#39;re asking for any kind of advice, then it&amp;#39;s not suitable.&lt;/li&gt;\n&lt;li&gt;If you feel the need to add an example in order for your question to make sense then you need to re-word your question.&lt;/li&gt;\n&lt;li&gt;If you&amp;#39;re explaining why you&amp;#39;re asking the question, you need to stop.&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;p&gt;You can always ask where best to post in &lt;a href=\"/r/findareddit\"&gt;/r/findareddit&lt;/a&gt;.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
          "user_flair_position": "right",
          "user_flair_enabled_in_sr": false,
          "user_flair_template_id": null,
          "user_is_banned": null,
          "community_icon": "",
          "banner_background_image": "",
          "original_content_tag_enabled": false,
          "wiki_enabled": true,
          "banner_size": [1280, 384],
          "show_media": false,
          "banner_background_color": "#f0f7fd",
          "display_name_prefixed": "r/AskReddit",
          "user_is_muted": null,
          "user_flair_type": "text",
          "user_can_flair_in_sr": null,
          "display_name": "AskReddit",
          "header_img": "https://a.thumbs.redditmedia.com/IrfPJGuWzi_ewrDTBlnULeZsJYGz81hsSQoQJyw6LD8.png",
          "description_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;h6&gt;&lt;a href=\"http://www.reddit.com/r/askreddit/submit?selftext=true&amp;amp;title=%5BSerious%5D\"&gt; [ SERIOUS ] &lt;/a&gt;&lt;/h6&gt;\n\n&lt;h5&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/index#wiki_rules\"&gt;Rules&lt;/a&gt;:&lt;/h5&gt;\n\n&lt;ol&gt;\n&lt;li&gt;&lt;p&gt;You must post a clear and direct question in the title. The title may contain two, short, necessary context sentences.\nNo text is allowed in the textbox. Your thoughts/responses to the question can go in the comments section. &lt;a href=\"http://goo.gl/tMUR4k\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Any post asking for advice should be generic and not specific to your situation alone. &lt;a href=\"http://goo.gl/2L771B\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Askreddit is for open-ended discussion questions. &lt;a href=\"http://goo.gl/DcPPLf\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Posting, or seeking, any identifying personal information, real or fake, will result in a ban without a prior warning. &lt;a href=\"http://goo.gl/imCCMb\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Askreddit is not your soapbox, personal army, or advertising platform. &lt;a href=\"http://goo.gl/DG4Q2M\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Questions seeking professional advice are inappropriate for this subreddit and will be removed. &lt;a href=\"http://goo.gl/G6Zbap\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Soliciting money, goods, services, or favours is not allowed. &lt;a href=\"http://goo.gl/Ce2LTY\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Mods reserve the right to remove content or restrict users&amp;#39; posting privileges as necessary if it is deemed detrimental to the subreddit or to the experience of others. &lt;a href=\"http://goo.gl/a5GQTm\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Comment replies consisting solely of images will be removed. &lt;a href=\"http://goo.gl/YVNgU0\"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;/ol&gt;\n\n&lt;h5&gt;If you think your post has disappeared, see spam or an inappropriate post, please do not hesitate to &lt;a href=\"http://goo.gl/xnppZr\"&gt;contact the mods&lt;/a&gt;, we&amp;#39;re happy to help.&lt;/h5&gt;\n\n&lt;hr/&gt;\n\n&lt;h4&gt;Tags to use:&lt;/h4&gt;\n\n&lt;blockquote&gt;\n&lt;h2&gt;&lt;a href=\"http://goo.gl/gMFZjB\"&gt;[Serious]&lt;/a&gt;&lt;/h2&gt;\n&lt;/blockquote&gt;\n\n&lt;h3&gt;Use a &lt;strong&gt;[Serious]&lt;/strong&gt; post tag to designate your post as a serious, on-topic-only thread.&lt;/h3&gt;\n\n&lt;h2&gt;&lt;/h2&gt;\n\n&lt;h4&gt;Filter posts by subject:&lt;/h4&gt;\n\n&lt;p&gt;&lt;a href=\"http://ud.reddit.com/r/AskReddit/#ud\"&gt;Mod posts&lt;/a&gt;\n&lt;a href=\"http://dg.reddit.com/r/AskReddit/#dg\"&gt;Serious posts&lt;/a&gt;\n&lt;a href=\"http://bu.reddit.com/r/AskReddit/#bu\"&gt;Megathread&lt;/a&gt;\n&lt;a href=\"http://nr.reddit.com/r/AskReddit/#nr\"&gt;Breaking news&lt;/a&gt;\n&lt;a href=\"http://goo.gl/qJBQRm\"&gt;Unfilter&lt;/a&gt;&lt;/p&gt;\n\n&lt;h2&gt;&lt;/h2&gt;\n\n&lt;h3&gt;Do you have ideas or feedback for Askreddit? Submit to &lt;a href=\"http://www.reddit.com/r/Ideasforaskreddit\"&gt;/r/Ideasforaskreddit&lt;/a&gt;.&lt;/h3&gt;\n\n&lt;h2&gt;&lt;/h2&gt;\n\n&lt;h3&gt;Please use spoiler tags to hide spoilers. &lt;code&gt;&amp;gt;!insert spoiler here!&amp;lt;&lt;/code&gt;&lt;/h3&gt;\n\n&lt;h2&gt;&lt;/h2&gt;\n\n&lt;h4&gt;Other subreddits you might like:&lt;/h4&gt;\n\n&lt;table&gt;&lt;thead&gt;\n&lt;tr&gt;\n&lt;th align=\"left\"&gt;some&lt;/th&gt;\n&lt;th align=\"left\"&gt;header&lt;/th&gt;\n&lt;/tr&gt;\n&lt;/thead&gt;&lt;tbody&gt;\n&lt;tr&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_ask_others\"&gt;Ask Others&lt;/a&gt;&lt;/td&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_self_.26amp.3B_others\"&gt;Self &amp;amp; Others&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_find_a_subreddit\"&gt;Find a subreddit&lt;/a&gt;&lt;/td&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_learn_something\"&gt;Learn something&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_meta\"&gt;Meta Subs&lt;/a&gt;&lt;/td&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_what_is_this______\"&gt;What is this ___&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_askreddit_offshoots\"&gt;AskReddit Offshoots&lt;/a&gt;&lt;/td&gt;\n&lt;td align=\"left\"&gt;&lt;a href=\"https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_offers_.26amp.3B_assistance\"&gt;Offers &amp;amp; Assistance&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;/tbody&gt;&lt;/table&gt;\n\n&lt;h2&gt;&lt;/h2&gt;\n\n&lt;h3&gt;Ever read the reddiquette? &lt;a href=\"http://goo.gl/pxsd8T\"&gt;Take a peek!&lt;/a&gt;&lt;/h3&gt;\n\n&lt;p&gt;&lt;a href=\"#/RES_SR_Config/NightModeCompatible\"&gt;&lt;/a&gt;\n&lt;a href=\"http://goo.gl/TQnRmU\"&gt;&lt;/a&gt;\n&lt;a href=\"#may4th\"&gt;&lt;/a&gt;&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
          "title": "Ask Reddit...",
          "collapse_deleted_comments": true,
          "id": "2qh1i",
          "user_has_favorited": null,
          "public_description": "/r/AskReddit is the place to ask and answer thought-provoking questions.",
          "over18": false,
          "public_description_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;&lt;a href=\"/r/AskReddit\"&gt;/r/AskReddit&lt;/a&gt; is the place to ask and answer thought-provoking questions.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
          "created": 1201261935.0,
          "allow_videos": false,
          "spoilers_enabled": true,
          "icon_size": [256, 256],
          "primary_color": "#646d73",
          "audience_target": "stories",
          "all_original_content": false,
          "notification_level": null,
          "active_user_count": null,
          "icon_img": "https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png",
          "header_title": "Ass Credit",
          "description": "###### [ [ SERIOUS ] ](http://www.reddit.com/r/askreddit/submit?selftext=true&amp;title=%5BSerious%5D)\r\n\r\n\r\n##### [Rules](https://www.reddit.com/r/AskReddit/wiki/index#wiki_rules):\r\n1. You must post a clear and direct question in the title. The title may contain two, short, necessary context sentences.\r\nNo text is allowed in the textbox. Your thoughts/responses to the question can go in the comments section. [more &gt;&gt;](http://goo.gl/tMUR4k)\r\n\r\n2. Any post asking for advice should be generic and not specific to your situation alone. [more &gt;&gt;](http://goo.gl/2L771B)\r\n\r\n3. Askreddit is for open-ended discussion questions. [more &gt;&gt;](http://goo.gl/DcPPLf)\r\n\r\n4. Posting, or seeking, any identifying personal information, real or fake, will result in a ban without a prior warning. [more &gt;&gt;](http://goo.gl/imCCMb)\r\n\r\n5. Askreddit is not your soapbox, personal army, or advertising platform. [more &gt;&gt;](http://goo.gl/DG4Q2M)\r\n\r\n6. Questions seeking professional advice are inappropriate for this subreddit and will be removed. [more &gt;&gt;](http://goo.gl/G6Zbap)\r\n\r\n7. Soliciting money, goods, services, or favours is not allowed. [more &gt;&gt;](http://goo.gl/Ce2LTY)\r\n\r\n8. Mods reserve the right to remove content or restrict users' posting privileges as necessary if it is deemed detrimental to the subreddit or to the experience of others. [more &gt;&gt;](http://goo.gl/a5GQTm)\r\n\r\n9. Comment replies consisting solely of images will be removed. [more &gt;&gt;](http://goo.gl/YVNgU0)\r\n\r\n##### If you think your post has disappeared, see spam or an inappropriate post, please do not hesitate to [contact the mods](http://goo.gl/xnppZr), we're happy to help.\r\n\r\n---\r\n\r\n#### Tags to use:\r\n\r\n&gt; ## [[Serious]](http://goo.gl/gMFZjB)\r\n\r\n### Use a **[Serious]** post tag to designate your post as a serious, on-topic-only thread.\r\n\r\n-\r\n\r\n#### Filter posts by subject:\r\n\r\n[Mod posts](http://ud.reddit.com/r/AskReddit/#ud)\r\n[Serious posts](http://dg.reddit.com/r/AskReddit/#dg)\r\n[Megathread](http://bu.reddit.com/r/AskReddit/#bu)\r\n[Breaking news](http://nr.reddit.com/r/AskReddit/#nr)\r\n[Unfilter](http://goo.gl/qJBQRm)\r\n\r\n-\r\n\r\n### Do you have ideas or feedback for Askreddit? Submit to [/r/Ideasforaskreddit](http://www.reddit.com/r/Ideasforaskreddit).\r\n\r\n-\r\n\r\n### Please use spoiler tags to hide spoilers. `&gt;!insert spoiler here!&lt;`\r\n\r\n-\r\n\r\n#### Other subreddits you might like:\r\nsome|header\r\n:---|:---\r\n[Ask Others](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_ask_others)|[Self &amp; Others](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_self_.26amp.3B_others)\r\n[Find a subreddit](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_find_a_subreddit)|[Learn something](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_learn_something)\r\n[Meta Subs](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_meta)|[What is this ___](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_what_is_this______)\r\n[AskReddit Offshoots](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_askreddit_offshoots)|[Offers &amp; Assistance](https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_offers_.26amp.3B_assistance)\r\n\r\n\r\n-\r\n\r\n### Ever read the reddiquette? [Take a peek!](http://goo.gl/pxsd8T)\r\n\r\n[](#/RES_SR_Config/NightModeCompatible)\r\n[](http://goo.gl/TQnRmU)\r\n[](#may4th)\r\n",
          "can_assign_link_flair": false,
          "submit_text": "**AskReddit is all about DISCUSSION. Your post needs to inspire discussion, ask an open-ended question that prompts redditors to share ideas or opinions.**\n\n**Questions need to be neutral and the question alone.** Any opinion or answer must go as a reply to your question, this includes examples or any kind of story about you. This is so that all responses will be to your question, and there's nothing else to respond to. Opinionated posts are forbidden.\n\n* If your question has a factual answer, try /r/answers.\n* If you are trying to find out about something or get an explanation, try /r/explainlikeimfive\n* If your question has a limited number of responses, then it's not suitable.\n* If you're asking for any kind of advice, then it's not suitable.\n* If you feel the need to add an example in order for your question to make sense then you need to re-word your question.\n* If you're explaining why you're asking the question, you need to stop.\n\nYou can always ask where best to post in /r/findareddit.",
          "user_flair_text_color": null,
          "accounts_active": null,
          "public_traffic": false,
          "header_size": [125, 73],
          "subscribers": 19524285,
          "user_flair_css_class": null,
          "submit_text_label": "Ask a question",
          "whitelist_status": "all_ads",
          "link_flair_position": "right",
          "user_flair_richtext": [],
          "user_sr_flair_enabled": null,
          "lang": "es",
          "user_is_moderator": null,
          "has_menu_widget": true,
          "is_enrolled_in_new_modmail": null,
          "key_color": "#222222",
          "name": "t5_2qh1i",
          "can_assign_user_flair": false,
          "allow_videogifs": false,
          "url": "/r/AskReddit/",
          "quarantine": false,
          "wls": 6,
          "created_utc": 1201233135.0,
          "emojis_enabled": true,
          "user_is_contributor": null,
          "submit_link_label": null,
          "allow_discovery": true,
          "accounts_active_is_fuzzed": false,
          "advertiser_category": "Lifestyles",
          "user_sr_theme_enabled": true,
          "link_flair_enabled": true,
          "allow_images": true,
          "show_media_preview": true,
          "comment_score_hide_mins": 60,
          "subreddit_type": "public",
          "submission_type": "self",
          "user_is_subscriber": null
        }
      },
      {
        "kind": "t5",
        "data": {
          "suggested_comment_sort": null,
          "user_flair_background_color": null,
          "hide_ads": false,
          "banner_img": "https://a.thumbs.redditmedia.com/kcKnQt4TInkTARtKtsyRhvs5g3bdkVXq8wSJF6gDH20.png",
          "user_flair_text": null,
          "submit_text_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;ol&gt;\n&lt;li&gt;&lt;p&gt;Submissions must be for &lt;strong&gt;Current U.S. Political news &amp;amp; information only.&lt;/strong&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;a href=\"https://www.reddit.com/r/politics/wiki/whitelist\"&gt;&lt;strong&gt;Submissions must come from domains on the whitelist.&lt;/strong&gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;strong&gt;Do not create your own title for link posts or they will be removed.&lt;/strong&gt; &lt;/p&gt;\n\n&lt;p&gt;Your title must match the article&amp;#39;s headline &lt;strong&gt;exactly&lt;/strong&gt;. Do not add or remove words.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Note: Using Reddit&amp;#39;s &amp;#39;Submit Title&amp;#39; does not always give the exact title, it&amp;#39;s not recommended to use this feature &amp;amp; instead copy/paste the title from the article.&lt;/strong&gt; &lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Do not use ALL CAPS, or use \u201cBREAKING\u201d in your titles.&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Do not submit links to wikis, images, memes. Political cartoons &amp;amp; detailed info-graphics should be linked to their original source.&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;&lt;strong&gt;Submit from the original source of the article.&lt;/strong&gt; &lt;a href=\"http://www.reddit.com/r/politics/wiki/rulesandregs#wiki_ensure_that_you_are_using_the_original_source\"&gt;Blogspam and rehosted content will be removed.&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;/ol&gt;\n\n&lt;p&gt;Posts that do not follow these rules are subject to removal.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
          "user_flair_position": "right",
          "user_flair_enabled_in_sr": false,
          "user_flair_template_id": null,
          "user_is_banned": null,
          "community_icon": "",
          "banner_background_image": "",
          "original_content_tag_enabled": false,
          "wiki_enabled": true,
          "banner_size": [880, 264],
          "show_media": true,
          "banner_background_color": "",
          "display_name_prefixed": "r/politics",
          "user_is_muted": null,
          "user_flair_type": "text",
          "user_can_flair_in_sr": null,
          "display_name": "politics",
          "header_img": "https://b.thumbs.redditmedia.com/fREkTALOGCmOydgClyhaIy6k30jm0NdIVpAT0wi--QA.png",
          "description_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;h2&gt;&lt;strong&gt;Welcome to &lt;a href=\"/r/Politics\"&gt;/r/Politics&lt;/a&gt;! Please read &lt;a href=\"http://www.goo.gl/o8SOTy\"&gt;the wiki&lt;/a&gt; before participating.&lt;/strong&gt;  ||  &lt;a href=\"https://www.reddit.com/r/politics/comments/7nmfkw/2018_calendar_of_primaries/\"&gt;2018 Primaries Calendar&lt;/a&gt; || &lt;a href=\"https://www.reddit.com/r/politics/comments/8tzsrq/discussion_megathread_primary_elections_in_co_md/\"&gt;6/26/18 Primaries Megathread&lt;/a&gt;&lt;/h2&gt;\n\n&lt;p&gt;&lt;a href=\"/r/politics\"&gt;/r/politics&lt;/a&gt; is the subreddit for current and explicitly political U.S. news.&lt;/p&gt;\n\n&lt;h3&gt;&lt;a href=\"https://www.reddit.com/r/politics/wiki/index\"&gt;Our full rules&lt;/a&gt; &lt;a href=\"https://www.reddit.com/wiki/reddiquette\"&gt;Reddiquette&lt;/a&gt;&lt;/h3&gt;\n\n&lt;h1&gt;&lt;a href=\"https://goo.gl/GUSfTU\"&gt;Comment Guidelines&lt;/a&gt;:&lt;/h1&gt;\n\n&lt;table&gt;&lt;thead&gt;\n&lt;tr&gt;\n&lt;th align=\"center\"&gt;&lt;/th&gt;\n&lt;th align=\"center\"&gt;&lt;/th&gt;\n&lt;/tr&gt;\n&lt;/thead&gt;&lt;tbody&gt;\n&lt;tr&gt;\n&lt;td align=\"center\"&gt;Be civil&lt;/td&gt;\n&lt;td align=\"center\"&gt;Treat others with basic decency. No personal attacks, shill accusations, hate-speech, flaming, baiting, trolling, witch-hunting, or unsubstantiated accusations. Threats of violence will result in a ban. &lt;a href=\"/r/politics/wiki/index#wiki_be_civil\"&gt;More Info.&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"center\"&gt;Do not post users&amp;#39; personal information.&lt;/td&gt;\n&lt;td align=\"center\"&gt;Users who violate this rule will be banned on sight. Witch-hunting and giving out private personal details of other people can result in unexpected and potentially serious consequences for the individual targeted. &lt;a href=\"/r/politics/wiki/index#wiki_no_witch_hunting\"&gt;More Info.&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"center\"&gt;Vote based on quality, not opinion.&lt;/td&gt;\n&lt;td align=\"center\"&gt;Political discussion requires varied opinions. Well written and interesting content can be worthwhile, even if you disagree with it. Downvote only if you think a comment/post does not contribute to the thread it is posted in or if it is off-topic in &lt;a href=\"/r/politics\"&gt;/r/politics&lt;/a&gt;. &lt;a href=\"/r/politics/wiki/index#wiki_vote_on_quality.2C_not_opinion\"&gt;More Info.&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"center\"&gt;Do not manipulate comments and posts via group voting.&lt;/td&gt;\n&lt;td align=\"center\"&gt;Manipulating comments and posts via group voting is against reddit TOS. &lt;a href=\"https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/what-constitutes-vote\"&gt;More Info.&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;/tbody&gt;&lt;/table&gt;\n\n&lt;h1&gt;&lt;a href=\"https://goo.gl/b1jomD\"&gt;Submission Guidelines:&lt;/a&gt;&lt;/h1&gt;\n\n&lt;table&gt;&lt;thead&gt;\n&lt;tr&gt;\n&lt;th align=\"center\"&gt;&lt;/th&gt;\n&lt;th align=\"center\"&gt;&lt;/th&gt;\n&lt;/tr&gt;\n&lt;/thead&gt;&lt;tbody&gt;\n&lt;tr&gt;\n&lt;td align=\"center\"&gt;Articles must deal explicitly with US politics.&lt;/td&gt;\n&lt;td align=\"center\"&gt;&lt;a href=\"/r/politics/wiki/index#wiki_the_.2Fr.2Fpolitics_on_topic_statement\"&gt;See our on-topic statement here.&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"center\"&gt;Articles must be published within the last calendar month.&lt;/td&gt;\n&lt;td align=\"center\"&gt;&lt;a href=\"https://www.reddit.com/r/politics/wiki/index#wiki_articles_must_be_published_within_the_last_calendar_month.\"&gt;More Info.&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"center\"&gt;Submissions must be from domains on the whitelist.&lt;/td&gt;\n&lt;td align=\"center\"&gt;&lt;a href=\"https://www.reddit.com/r/politics/wiki/whitelist\"&gt;The whitelist and its criteria can be found here.&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"center\"&gt;Post titles must be the exact headline from the article.&lt;/td&gt;\n&lt;td align=\"center\"&gt;Your headline must be comprised only of the &lt;strong&gt;exact&lt;/strong&gt; copied and pasted headline of the article. &lt;a href=\"/r/politics/wiki/index#wiki_do_not_create_your_own_title\"&gt;More Info.&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"center\"&gt;Submissions must be an original source.&lt;/td&gt;\n&lt;td align=\"center\"&gt;An article must contain significant analysis and original content--not just a few links of text among chunks of copy and pasted material. Content is considered rehosted when a publication takes the majority of their content from another website and reposts it in order to get the traffic and collect ad revenue. &lt;a href=\"/r/politics/wiki/index#wiki_ensure_that_you_are_using_the_original_source\"&gt;More Info.&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"center\"&gt;Articles must be written in English&lt;/td&gt;\n&lt;td align=\"center\"&gt;An article must be &lt;strong&gt;primarily&lt;/strong&gt; written in English for us to be able to moderate it and enforce our rules in a fair and unbiased manner. &lt;a href=\"/r/politics/wiki/index#wiki_all_submissions_must_be_in_english.\"&gt;More Info.&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"center\"&gt;Spam is bad!&lt;/td&gt;\n&lt;td align=\"center\"&gt;If 33% or more of your submissions are from a single website, you will be banned as a spammer. &lt;a href=\"/r/politics/wiki/index#wiki_spam_is_bad.21\"&gt;More Info.&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"center\"&gt;Submissions must be articles, videos or sound clips.&lt;/td&gt;\n&lt;td align=\"center\"&gt;We disallow solicitation of users (petitions, polls, requests for money, etc.), personal blogs, satire, images, social media content (Facebook, twitter, tumblr, LinkedIn, etc.), wikis, memes, and political advertisements. More info: &lt;a href=\"/r/politics/wiki/index#wiki_disallowed_submission_types.3A\"&gt;Content type rules.&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align=\"center\"&gt;Do not use &amp;quot;BREAKING&amp;quot; or ALL CAPS in titles.&lt;/td&gt;\n&lt;td align=\"center\"&gt;The ALL CAPS and &amp;#39;Breaking&amp;#39; rule is applied even when the actual title of the article is in all caps or contains the word &amp;#39;Breaking&amp;#39;. This rule may be applied to other single word declarative and/or sensational expressions, such as &amp;#39;EXCLUSIVE:&amp;#39; or &amp;#39;HOT:&amp;#39;. &lt;a href=\"/r/politics/wiki/index#wiki_do_not_create_your_own_title\"&gt;More Info.&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;/tbody&gt;&lt;/table&gt;\n\n&lt;h1&gt;Events Calendar&lt;/h1&gt;\n\n&lt;blockquote&gt;\n&lt;p&gt;5 Jul - 3pm EST&lt;/p&gt;\n&lt;/blockquote&gt;\n\n&lt;ul&gt;\n&lt;li&gt;AMA with Cassimir Svigelj&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;blockquote&gt;\n&lt;p&gt;6 Jul - 3pm EST&lt;/p&gt;\n&lt;/blockquote&gt;\n\n&lt;ul&gt;\n&lt;li&gt;AMA with Beth Fukumoto&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;blockquote&gt;\n&lt;p&gt;7 Jul - 11am EST&lt;/p&gt;\n&lt;/blockquote&gt;\n\n&lt;ul&gt;\n&lt;li&gt;Cartoon Thread&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;blockquote&gt;\n&lt;p&gt;9 Jul - 12pm EST&lt;/p&gt;\n&lt;/blockquote&gt;\n\n&lt;ul&gt;\n&lt;li&gt;Local News Thread&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;blockquote&gt;\n&lt;p&gt;10 Jul - 12pm EST&lt;/p&gt;\n&lt;/blockquote&gt;\n\n&lt;ul&gt;\n&lt;li&gt;AMA with Benjamin Wittes&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;blockquote&gt;\n&lt;p&gt;11 Jul - 12pm EST&lt;/p&gt;\n&lt;/blockquote&gt;\n\n&lt;ul&gt;\n&lt;li&gt;AMA with Alan Dershowitz&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;blockquote&gt;\n&lt;p&gt;12 Jul - 3pm EST&lt;/p&gt;\n&lt;/blockquote&gt;\n\n&lt;ul&gt;\n&lt;li&gt;AMA with FIRE&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;h1&gt;Other Resources:&lt;/h1&gt;\n\n&lt;h4&gt;&lt;a href=\"http://www.reddit.com/r/politics/wiki/relatedsubs\"&gt;Full list of Related Subreddits&lt;/a&gt;&lt;/h4&gt;\n\n&lt;h4&gt;&lt;a href=\"http://twitter.com/rSlashPolitics\"&gt;Follow us on Twitter&lt;/a&gt;&lt;/h4&gt;\n\n&lt;h4&gt;&lt;a href=\"https://docs.google.com/forms/d/e/1FAIpQLSdPb-2CtL2lIsMo9xOvs6sdQGDymyZ29seWyQsNTJy1oxPthw/viewform?usp=sf_link\"&gt;Request an AMA&lt;/a&gt;&lt;/h4&gt;\n\n&lt;h4&gt;&lt;a href=\"https://goo.gl/AH1EPQ\"&gt;Events Calendar&lt;/a&gt;&lt;/h4&gt;\n\n&lt;h4&gt;&lt;a href=\"https://politicsmodapp.herokuapp.com/\"&gt;Apply to be a mod&lt;/a&gt;&lt;/h4&gt;\n\n&lt;h4&gt;&lt;a href=\"http://goo.gl/XHLkS\"&gt;Register To Vote&lt;/a&gt;&lt;/h4&gt;\n\n&lt;p&gt;&lt;a href=\"#/RES_SR_Config/NightModeCompatible\"&gt;&lt;/a&gt;&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
          "title": "Politics",
          "collapse_deleted_comments": true,
          "id": "2cneq",
          "user_has_favorited": null,
          "public_description": "/r/Politics is for news and discussion about U.S. politics.",
          "over18": false,
          "public_description_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;&lt;a href=\"/r/Politics\"&gt;/r/Politics&lt;/a&gt; is for news and discussion about U.S. politics.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
          "created": 1186406199.0,
          "allow_videos": false,
          "spoilers_enabled": false,
          "icon_size": [256, 256],
          "primary_color": "",
          "audience_target": "local,news",
          "all_original_content": false,
          "notification_level": null,
          "active_user_count": null,
          "icon_img": "https://a.thumbs.redditmedia.com/ZaSYxoONdAREm1_u_sid_fjcgvBTNeFQV--8tz6fZC0.png",
          "header_title": "The Place for U.S. Politics",
          "description": "## **Welcome to /r/Politics! Please read [the wiki](http://www.goo.gl/o8SOTy) before participating.**  ||  [2018 Primaries Calendar](https://www.reddit.com/r/politics/comments/7nmfkw/2018_calendar_of_primaries/) || [6/26/18 Primaries Megathread](https://www.reddit.com/r/politics/comments/8tzsrq/discussion_megathread_primary_elections_in_co_md/)\r\n            \r\n\r\n/r/politics is the subreddit for current and explicitly political U.S. news.\r\n\r\n### [Our full rules](https://www.reddit.com/r/politics/wiki/index) [Reddiquette](https://www.reddit.com/wiki/reddiquette)\r\n\r\n# [Comment Guidelines](https://goo.gl/GUSfTU):\r\n\r\n ||\r\n:-:|:-:\r\nBe civil|Treat others with basic decency. No personal attacks, shill accusations, hate-speech, flaming, baiting, trolling, witch-hunting, or unsubstantiated accusations. Threats of violence will result in a ban. [More Info.](/r/politics/wiki/index#wiki_be_civil)\r\nDo not post users' personal information.|Users who violate this rule will be banned on sight. Witch-hunting and giving out private personal details of other people can result in unexpected and potentially serious consequences for the individual targeted. [More Info.](/r/politics/wiki/index#wiki_no_witch_hunting)\r\nVote based on quality, not opinion.|Political discussion requires varied opinions. Well written and interesting content can be worthwhile, even if you disagree with it. Downvote only if you think a comment/post does not contribute to the thread it is posted in or if it is off-topic in /r/politics. [More Info.](/r/politics/wiki/index#wiki_vote_on_quality.2C_not_opinion)\r\nDo not manipulate comments and posts via group voting.|Manipulating comments and posts via group voting is against reddit TOS. [More Info.](https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/what-constitutes-vote)\r\n\r\n\r\n# [Submission Guidelines:](https://goo.gl/b1jomD)\r\n\r\n ||\r\n:-:|:-:\r\nArticles must deal explicitly with US politics.|[See our on-topic statement here.](/r/politics/wiki/index#wiki_the_.2Fr.2Fpolitics_on_topic_statement)\r\nArticles must be published within the last calendar month.|[More Info.](https://www.reddit.com/r/politics/wiki/index#wiki_articles_must_be_published_within_the_last_calendar_month.)\r\nSubmissions must be from domains on the whitelist.|[The whitelist and its criteria can be found here.](https://www.reddit.com/r/politics/wiki/whitelist)\r\nPost titles must be the exact headline from the article.|Your headline must be comprised only of the **exact** copied and pasted headline of the article. [More Info.](/r/politics/wiki/index#wiki_do_not_create_your_own_title)\r\nSubmissions must be an original source.|An article must contain significant analysis and original content--not just a few links of text among chunks of copy and pasted material. Content is considered rehosted when a publication takes the majority of their content from another website and reposts it in order to get the traffic and collect ad revenue. [More Info.](/r/politics/wiki/index#wiki_ensure_that_you_are_using_the_original_source)\r\nArticles must be written in English|An article must be **primarily** written in English for us to be able to moderate it and enforce our rules in a fair and unbiased manner. [More Info.](/r/politics/wiki/index#wiki_all_submissions_must_be_in_english.)\r\nSpam is bad!|If 33% or more of your submissions are from a single website, you will be banned as a spammer. [More Info.](/r/politics/wiki/index#wiki_spam_is_bad.21)\r\nSubmissions must be articles, videos or sound clips.|We disallow solicitation of users (petitions, polls, requests for money, etc.), personal blogs, satire, images, social media content (Facebook, twitter, tumblr, LinkedIn, etc.), wikis, memes, and political advertisements. More info: [Content type rules.](/r/politics/wiki/index#wiki_disallowed_submission_types.3A)\r\nDo not use \"BREAKING\" or ALL CAPS in titles.|The ALL CAPS and 'Breaking' rule is applied even when the actual title of the article is in all caps or contains the word 'Breaking'. This rule may be applied to other single word declarative and/or sensational expressions, such as 'EXCLUSIVE:' or 'HOT:'. [More Info.](/r/politics/wiki/index#wiki_do_not_create_your_own_title)\r\n\r\n#Events Calendar\r\n\r\n&gt; 5 Jul - 3pm EST\n\n * AMA with Cassimir Svigelj\n\n&gt; 6 Jul - 3pm EST\n\n * AMA with Beth Fukumoto\n\n&gt; 7 Jul - 11am EST\n\n * Cartoon Thread\n\n&gt; 9 Jul - 12pm EST\n\n * Local News Thread\n\n&gt; 10 Jul - 12pm EST\n\n * AMA with Benjamin Wittes\n\n&gt; 11 Jul - 12pm EST\n\n * AMA with Alan Dershowitz\n\n&gt; 12 Jul - 3pm EST\n\n * AMA with FIRE\n\n\r\n\r\n\r\n# Other Resources:\r\n\r\n#### [Full list of Related Subreddits](http://www.reddit.com/r/politics/wiki/relatedsubs)\r\n\r\n#### [Follow us on Twitter](http://twitter.com/rSlashPolitics)\r\n\r\n#### [Request an AMA](https://docs.google.com/forms/d/e/1FAIpQLSdPb-2CtL2lIsMo9xOvs6sdQGDymyZ29seWyQsNTJy1oxPthw/viewform?usp=sf_link)\r\n\r\n#### [Events Calendar](https://goo.gl/AH1EPQ)\r\n\r\n#### [Apply to be a mod](https://politicsmodapp.herokuapp.com/)\r\n\r\n#### [Register To Vote](http://goo.gl/XHLkS)\r\n\r\n[](#/RES_SR_Config/NightModeCompatible)",
          "can_assign_link_flair": false,
          "submit_text": "1. Submissions must be for **Current U.S. Political news &amp; information only.**\n\n2. [**Submissions must come from domains on the whitelist.**](https://www.reddit.com/r/politics/wiki/whitelist)\n\n3. **Do not create your own title for link posts or they will be removed.** \n\n    Your title must match the article's headline **exactly**. Do not add or remove words.\n    \n    **Note: Using Reddit's 'Submit Title' does not always give the exact title, it's not recommended to use this feature &amp; instead copy/paste the title from the article.** \n\n4. Do not use ALL CAPS, or use \u201cBREAKING\u201d in your titles.\n\n5. Do not submit links to wikis, images, memes. Political cartoons &amp; detailed info-graphics should be linked to their original source.\n\n6. **Submit from the original source of the article.** [Blogspam and rehosted content will be removed.](http://www.reddit.com/r/politics/wiki/rulesandregs#wiki_ensure_that_you_are_using_the_original_source)\n\nPosts that do not follow these rules are subject to removal.",
          "user_flair_text_color": null,
          "accounts_active": null,
          "public_traffic": false,
          "header_size": [21, 16],
          "subscribers": 3900380,
          "user_flair_css_class": null,
          "submit_text_label": null,
          "whitelist_status": "all_ads",
          "link_flair_position": "left",
          "user_flair_richtext": [],
          "user_sr_flair_enabled": null,
          "lang": "en",
          "user_is_moderator": null,
          "has_menu_widget": true,
          "is_enrolled_in_new_modmail": null,
          "key_color": "#24a0ed",
          "name": "t5_2cneq",
          "can_assign_user_flair": true,
          "allow_videogifs": false,
          "url": "/r/politics/",
          "quarantine": false,
          "wls": 6,
          "created_utc": 1186377399.0,
          "emojis_enabled": true,
          "user_is_contributor": null,
          "submit_link_label": null,
          "allow_discovery": true,
          "accounts_active_is_fuzzed": false,
          "advertiser_category": "Lifestyles",
          "user_sr_theme_enabled": true,
          "link_flair_enabled": true,
          "allow_images": false,
          "show_media_preview": false,
          "comment_score_hide_mins": 480,
          "subreddit_type": "public",
          "submission_type": "link",
          "user_is_subscriber": null
        }
      }

    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
