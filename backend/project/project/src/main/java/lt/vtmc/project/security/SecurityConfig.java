package lt.vtmc.project.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import lt.vtmc.project.service.UserService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserService userService;

	@Autowired
	private SecurityEntryPoint securityEntryPoint;

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
		authenticationProvider.setUserDetailsService(userDetailsService());
		authenticationProvider.setPasswordEncoder(passwordEncoder());
		return authenticationProvider;
	}

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable().authorizeRequests().antMatchers("/", "/swagger-ui/").permitAll()
				.antMatchers("/api/**").authenticated().and().formLogin()
				.successHandler(new AuthenticationSuccessHandler() {

					@Override
					public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
							Authentication authentication) throws IOException, ServletException {

						Authentication user = SecurityContextHolder.getContext().getAuthentication();

						String username = user.getName();
						Object[] roles = user.getAuthorities().toArray();
						String role = roles[0].toString();
						response.setHeader("Access-Control-Allow-Credentials", "true");
						response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
						response.setHeader("Content-Type", "application/json;charset=UTF-8");
						response.getWriter().print("{\"username\": \"" + username + "\", \"role\":\"" + role + "\"}");

					}

				})

				.failureHandler(new AuthenticationFailureHandler() {

					@Override
					public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
							AuthenticationException exception) throws IOException, ServletException {

						response.sendError(401, "Wrong username and/or password");
					}
				}).loginPage("/login").permitAll()

				.and().logout().logoutUrl("/logout").logoutSuccessHandler(new LogoutSuccessHandler() {

					@Override
					public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response,
							Authentication authentication) throws IOException, ServletException {

					}
				})

				.clearAuthentication(true).invalidateHttpSession(true).deleteCookies("JSESSIONID").logoutSuccessUrl("/")
				.permitAll().and().csrf().disable().exceptionHandling().authenticationEntryPoint(securityEntryPoint)
				.and().headers().frameOptions().disable().and().sessionManagement().maximumSessions(1)
				.maxSessionsPreventsLogin(false).expiredUrl("/api/loggedUser").sessionRegistry(sessionRegistry());

	}

	@Bean
	SessionRegistry sessionRegistry() {
		return new SessionRegistryImpl();
	}

}

//	@Autowired
//	private UserService userService;
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http.cors().and().csrf().disable().authorizeRequests().antMatchers("**").permitAll().anyRequest().anonymous()
//				.and().exceptionHandling().and().headers().frameOptions().sameOrigin();
//	}

// pavyzdys is Springo skaidriu

//	@Autowired
//	private SecurityEntryPoint securityEntryPoint;
//http.authorizeRequests().antMatchers("/", "/Swagger-ui").permitAll().antMatchers("/api/**").authenticated()
//.and().formLogin().successHandler(new SimpleUrlAuthenticationSuccessHandler())
//.failureHandler(new SimpleUrlAuthenticationFailureHandler()).loginPage("/login").permitAll().and()
//.logout().permitAll().and().csrf().disable().exceptionHandling()
//.authenticationEntryPoint(securityEntryPoint).and().headers().frameOptions().disable()
//.successHandler(new AuthenticationSuccessHandler()) {
//@Override
//public void onAuthernticationSuccess(HttpServeRequest request, HttpServeResponse response, Authentication authentication) throws IOException, ServeException {
//response.setHeader("Access-Control-Allow-Credentials", "true");
//response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
//response.getWriter().print("{"username\": \""+SecurityContextHolder.getContext().getAuthentication().getName+"\"}");
//};

//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}
//
//	@Bean
//	public DaoAuthenticationProvider authenticationProvider() {
//		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
//
//		authenticationProvider.setUserDetailsService(userDetailsService());
//		authenticationProvider.setPasswordEncoder(passwordEncoder());
//
//		return authenticationProvider;
//	}
//
//	@Autowired
//	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//		auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
//	}

//}
