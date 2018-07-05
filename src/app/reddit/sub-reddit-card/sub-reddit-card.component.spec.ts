import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRedditCardComponent } from './sub-reddit-card.component';
import { ImagePipe } from '../../shared/pipes/image.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('SubRedditCardComponent', () => {
  let component: SubRedditCardComponent;
  let fixture: ComponentFixture<SubRedditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SubRedditCardComponent
      ],
      imports: [
        RouterTestingModule,
        SharedModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRedditCardComponent);
    component = fixture.componentInstance;
    component.reddit = {
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
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
